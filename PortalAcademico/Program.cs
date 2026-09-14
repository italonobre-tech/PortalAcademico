using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;

namespace PortalAcademico
{
    public record AlunoDTO(string Nome, string Email, string Senha, string Curso, int Periodo);

    public class Topico
    {
        public string Tipo { get; set; }
        public string Titulo { get; set; }
        public List<string> Conteudos { get; set; } = new List<string>();

        public Topico(string tipo, string titulo, List<string> conteudos)
        {
            Tipo = tipo;
            Titulo = titulo;
            Conteudos = conteudos;
        }
    }

    public class Disciplina
    {
        public string Nome { get; set; }
        public List<Topico> Topicos { get; set; } = new List<Topico>();

        public Disciplina(string nome)
        {
            Nome = nome;
        }
    }

    public class PeriodoModulo
    {
        public int NumeroPeriodo { get; set; }
        public List<Disciplina> Disciplinas { get; set; } = new List<Disciplina>();

        public PeriodoModulo(int numeroPeriodo)
        {
            NumeroPeriodo = numeroPeriodo;
        }
    }

    public class Curso
    {
        public string Nome { get; set; }
        public List<PeriodoModulo> Periodos { get; set; } = new List<PeriodoModulo>();

        public Curso(string nome)
        {
            Nome = nome;
        }
    }

    public class CatalogoCursos
    {
        private List<Curso> cursosDisponiveis = new List<Curso>();

        public CatalogoCursos()
        {
            InicializarCatalogo();
        }

        private void InicializarCatalogo()
        {
            cursosDisponiveis.Add(new Curso("Biomedicina"));
            cursosDisponiveis.Add(new Curso("Enfermagem"));
            cursosDisponiveis.Add(new Curso("Psicologia"));
            cursosDisponiveis.Add(new Curso("Engenharia Civil"));
            cursosDisponiveis.Add(new Curso("Administração"));
            cursosDisponiveis.Add(CriarCursoContabilidade());
            cursosDisponiveis.Add(CriarCursoDireito());
        }

        private Curso CriarCursoContabilidade()
        {
            Curso contabilidade = new Curso("Contabilidade");
            PeriodoModulo p1 = new PeriodoModulo(1);
            Disciplina discContabilidadeIntro = new Disciplina("Contabilidade Introdutória");

            discContabilidadeIntro.Topicos.Add(new Topico("base", "Patrimônio e Equação Patrimonial", new List<string>
            {
                "Porcentagem e Proporções",
                "Operações com Conjuntos",
                "Equações do 1º Grau"
            }));

            discContabilidadeIntro.Topicos.Add(new Topico("faculdade", "Lançamentos e Demonstrações Contábeis", new List<string>
            {
                "Método das Partidas Dobradas",
                "Lançamentos de Débito e Crédito",
                "Balanço Patrimonial",
                "DRE (Demonstração do Resultado do Exercício)"
            }));

            p1.Disciplinas.Add(discContabilidadeIntro);
            contabilidade.Periodos.Add(p1);

            return contabilidade;
        }

        private Curso CriarCursoDireito()
        {
            Curso direito = new Curso("Direito");
            PeriodoModulo p1 = new PeriodoModulo(1);
            Disciplina discIntrod = new Disciplina("Introdução ao Estudo do Direito");

            discIntrod.Topicos.Add(new Topico("base", "Filosofia e Teoria", new List<string> { "Fontes do Direito", "Positivismo" }));
            p1.Disciplinas.Add(discIntrod);
            direito.Periodos.Add(p1);

            return direito;
        }

        public List<string> ObterListaNomes()
        {
            return cursosDisponiveis.Select(c => c.Nome).ToList();
        }

        public Curso BuscarCurso(string nome)
        {
            return cursosDisponiveis.FirstOrDefault(c => c.Nome.Equals(nome, StringComparison.OrdinalIgnoreCase));
        }
    }

    public abstract class Usuario
    {
        public string Nome { get; protected set; }
        public string Email { get; protected set; }
        protected string Senha { get; set; }

        public Usuario(string nome, string email, string senha)
        {
            Nome = nome;
            Email = email;
            Senha = senha;
        }
    }

    public class Aluno : Usuario
    {
        public Curso CursoMatriculado { get; private set; }
        public int Periodo { get; private set; }

        public Aluno(string nome, string email, string senha, Curso curso, int periodo)
            : base(nome, email, senha)
        {
            CursoMatriculado = curso;
            Periodo = periodo;
        }
    }

    public partial class Program
    {
        static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(new WebApplicationOptions
            {
                Args = args,
                WebRootPath = "wwwroot"
            });

            var app = builder.Build();

            app.UseDefaultFiles();
            app.UseStaticFiles();

            var catalogo = new CatalogoCursos();
            var listaAlunos = new List<Aluno>();

            IResult ServirHtml(string nomeArquivo)
            {
                var webRoot = app.Environment.WebRootPath ?? Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
                var caminhoSubpasta = Path.Combine(webRoot, "html", nomeArquivo);
                var caminhoRaiz = Path.Combine(webRoot, nomeArquivo);

                if (File.Exists(caminhoSubpasta)) return Results.File(caminhoSubpasta, "text/html");
                if (File.Exists(caminhoRaiz)) return Results.File(caminhoRaiz, "text/html");

                return Results.Text($"<h1>Erro 404</h1><p>O arquivo <b>{nomeArquivo}</b> não foi encontrado.</p>", "text/html");
            }

            app.MapGet("/", () => ServirHtml("index.html"));
            app.MapGet("/index.html", () => ServirHtml("index.html"));
            app.MapGet("/cadastro.html", () => ServirHtml("cadastro.html"));
            app.MapGet("/login.html", () => ServirHtml("login.html"));

            app.MapGet("/api/cursos", () => Results.Ok(catalogo.ObterListaNomes()));

            app.MapGet("/api/cursos/{nome}", (string nome) =>
            {
                var curso = catalogo.BuscarCurso(nome);
                return curso != null ? Results.Ok(curso) : Results.NotFound(new { erro = "Curso não encontrado" });
            });

            app.MapPost("/api/alunos", (AlunoDTO dto) =>
            {
                var curso = catalogo.BuscarCurso(dto.Curso);
                if (curso == null) return Results.BadRequest(new { erro = "Curso selecionado é inválido." });

                var novoAluno = new Aluno(dto.Nome, dto.Email, dto.Senha, curso, dto.Periodo);
                listaAlunos.Add(novoAluno);

                return Results.Created($"/api/alunos/{novoAluno.Email}", new
                {
                    mensagem = "Aluno cadastrado com sucesso!",
                    aluno = new { novoAluno.Nome, novoAluno.Email, Curso = novoAluno.CursoMatriculado.Nome, novoAluno.Periodo }
                });
            });

            app.MapGet("/api/alunos", () => Results.Ok(listaAlunos.Select(a => new
            {
                a.Nome,
                a.Email,
                Curso = a.CursoMatriculado.Nome,
                a.Periodo
            })));

            app.Run();
        }
    }
}