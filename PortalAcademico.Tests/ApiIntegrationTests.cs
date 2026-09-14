using System.Net;
using System.Net.Http.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Testing;
using PortalAcademico;
using Xunit;

namespace PortalAcademico.Tests
{
    public class ApiIntegrationTests : IClassFixture<WebApplicationFactory<Program>>
    {
        private readonly HttpClient _client;

        public ApiIntegrationTests(WebApplicationFactory<Program> factory)
        {
            _client = factory.CreateClient();
        }

        // --- TESTES DE CURSOS ---

        [Fact]
        public async Task Get_Cursos_DeveRetornar200OK()
        {
            var response = await _client.GetAsync("/api/cursos");
            Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        }

        [Fact]
        public async Task Get_BuscarCursoExistente_DeveRetornar200EObjetoCurso()
        {
            var response = await _client.GetAsync("/api/cursos/Direito");
            Assert.Equal(HttpStatusCode.OK, response.StatusCode);

            var curso = await response.Content.ReadFromJsonAsync<Curso>();
            Assert.NotNull(curso);
            Assert.Equal("Direito", curso.Nome);
        }

        [Fact]
        public async Task Get_BuscarCursoInexistente_DeveRetornar404NotFound()
        {
            var response = await _client.GetAsync("/api/cursos/Astronomia");
            Assert.Equal(HttpStatusCode.NotFound, response.StatusCode);
        }

        [Fact]
        public async Task Get_BuscarCursoCaseInsensitive_DeveRetornar200OK()
        {
            var response = await _client.GetAsync("/api/cursos/coNtAbiLiDaDe");
            Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        }

        // --- TESTES DE ALUNOS ---

        [Fact]
        public async Task Post_CadastrarAlunoValido_DeveRetornar201Created()
        {
            var novoAluno = new AlunoDTO("João Silva", "joao@email.com", "123456", "Direito", 1);
            var response = await _client.PostAsJsonAsync("/api/alunos", novoAluno);

            Assert.Equal(HttpStatusCode.Created, response.StatusCode);
        }

        [Fact]
        public async Task Post_CadastrarAlunoCursoInvalido_DeveRetornar400BadRequest()
        {
            var alunoInvalido = new AlunoDTO("Erro Teste", "erro@email.com", "123456", "CursoInexistente", 1);
            var response = await _client.PostAsJsonAsync("/api/alunos", alunoInvalido);

            Assert.Equal(HttpStatusCode.BadRequest, response.StatusCode);
        }

        [Fact]
        public async Task Get_ListarAlunos_DeveRetornar200OK()
        {
            var response = await _client.GetAsync("/api/alunos");
            Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        }

        // --- TESTES DE PÁGINAS E FLUXO COMPLETO ---

        [Theory]
        [InlineData("/")]
        [InlineData("/index.html")]
        [InlineData("/cadastro.html")]
        [InlineData("/login.html")]
        public async Task Get_PaginasHtml_DeveRetornar200OK(string url)
        {
            var response = await _client.GetAsync(url);
            Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        }

        [Fact]
        public async Task Post_CadastrarAluno_DeveAparecerNaListaDeAlunos()
        {
            var novoAluno = new AlunoDTO("Maria Souza", "maria@email.com", "senha123", "Enfermagem", 2);

            // 1. Envia requisição de cadastro
            await _client.PostAsJsonAsync("/api/alunos", novoAluno);

            // 2. Confirma se o e-mail consta na lista pública de alunos
            var response = await _client.GetAsync("/api/alunos");
            var conteudo = await response.Content.ReadAsStringAsync();

            Assert.Contains("maria@email.com", conteudo);
        }
    }
}