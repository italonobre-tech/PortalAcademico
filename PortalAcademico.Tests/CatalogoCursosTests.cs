using PortalAcademico;
using Xunit;

namespace PortalAcademico.Tests
{
    public class CatalogoCursosTests
    {
        private readonly CatalogoCursos _catalogo;

        public CatalogoCursosTests()
        {
            _catalogo = new CatalogoCursos();
        }

        [Fact]
        public void ObterListaNomes_DeveRetornarTodosOsSeteCursos()
        {
            var cursos = _catalogo.ObterListaNomes();

            Assert.NotNull(cursos);
            Assert.Equal(7, cursos.Count);
            Assert.Contains("Direito", cursos);
            Assert.Contains("Contabilidade", cursos);
            Assert.Contains("Biomedicina", cursos);
        }

        [Fact]
        public void BuscarCurso_QuandoCursoExiste_DeveRetornarObjetoCurso()
        {
            var curso = _catalogo.BuscarCurso("Direito");

            Assert.NotNull(curso);
            Assert.Equal("Direito", curso.Nome);
        }

        [Fact]
        public void BuscarCurso_IgnorandoMaiusculasEMinusculas_DeveEncontrar()
        {
            var curso = _catalogo.BuscarCurso("pSiCoLoGiA");

            Assert.NotNull(curso);
            Assert.Equal("Psicologia", curso.Nome);
        }

        [Fact]
        public void BuscarCurso_QuandoCursoNaoExiste_DeveRetornarNulo()
        {
            var curso = _catalogo.BuscarCurso("Medicina");

            Assert.Null(curso);
        }
    }
}