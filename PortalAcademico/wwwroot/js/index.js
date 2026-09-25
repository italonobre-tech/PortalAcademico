// ==========================================
// INDEX.JS - COMPLETO, MESCLADO E SEM DUPLICAÇÃO
// ==========================================

// Dados dos cursos — MANTIDO INTACTO
const coursesData = {
    biomedicina: [
        {
            period: "1º Período: Fundamentos", desc: "Bases biológicas", subjects: [
                {
                    id: "bio1", icon: "🦴", name: "Anatomia Humana", hours: "225h", trilha: [
                        {
                            tipo: "base",
                            titulo: "Fisiologia",
                            desc: `
                        <strong>Biologia 2º ano</strong><br>
                        • Sistema Nervoso<br>
                        • Sistema Hormonal<br>
                        <br>
                        <strong>Biologia 3º ano</strong><br>
                        • Imunologia <br>
                        • Relação entre Sistema<br>
                        • Corpo Humana<br>
                        <br>
                        <strong>Química 2º ano</strong><br>
                        • Quimica orgânica<br>
                        • Funções orgânicas<br>
                        • Bioquímica Básica<br> 
                    `
                        },
                        {
                            tipo: "base",
                            titulo: "Citologia e Histologia",
                            desc: `
                        <strong>Biologia 1º ano</strong><br>
                        • Bioquímica Celular<br>
                        • Membrana Plasmática<br>
                        • Organelas Citoplasmáticas<br>
                        • Núcleo e Divisão Celular<br>
                        <br>
                        <strong>Biologia 2º ano</strong><br>
                        • Tecido Epitelial<br>
                        • Tecido Conjuntivo<br>
                        • Tecido Muscular<br>
                        • Tecido Nervoso<br>
                        <br>
                        <strong>Biologia 3º ano</strong><br>
                        • Genética<br>
                        • Embriologia<br>
                        • Evolução<br> 
                    `
                        },
                        {
                            tipo: "faculdade",
                            titulo: "Osteologia",
                            desc: `
                        <strong>Biologia 1º Período</strong><br>
                        • Funções do Esqueleto<br>
                        • Classificação dos Ossos<br>
                        • Estrutura Óssea<br>
                        • Esqueleto Axial<br>
                        • Esqueleto Apendicular<br>
                        <br>
                    `
                        },
                        {
                            tipo: "faculdade",
                            titulo: "Miologia",
                            desc: `
                        <strong>Biologia 1º Período</strong><br>
                        • Componentes Anatômicos<br>
                        • Classificação dos Músculos<br>
                        • Músculos da Cabeça e Pescoço<br>
                        • Músculos do Tronco<br>
                        • Manguito Rotador<br>
                        <br>
                    `
                        },
                    ]
                },
                {
                    id: "bio2", icon: "🧫", name: "Citologia e Histologia", hours: "225h", trilha: [
                        {
                            tipo: "base",
                            titulo: "Citologia",
                            desc: `
                        <strong>Biologia 1º ano</strong><br>
                        • Composição Química<br>
                        • Membrana Plasmática<br>
                        • Organelas<br>
                        • Núcleo e DNA<br>
                        • Divisão Celular<br>
                        <br>
                    `
                        },
                        {
                            tipo: "base",
                            titulo: "Histologia",
                            desc: `
                        <strong>Biologia 2º ano</strong><br>
                        • Tecido Epitelial<br>
                        • Tecido Conjuntivo<br>
                        • Tecido Muscular<br>
                        • Tecido Nervoso<br>
                        <br>
                    `
                        },
                        {
                            tipo: "faculdade",
                            titulo: "Citologia",
                            desc: `
                        <strong>Biologia 1º Período</strong><br>
                        • Biomembranas<br>
                        • Citoesqueleto<br>
                        • Tráfego de Vesículas<br>
                        • Sinalização Celular<br>
                        • Ciclo Celular e Apoptose<br>
                        <br>
                    `
                        },
                        {
                            tipo: "faculdade",
                            titulo: "Histologia",
                            desc: `
                        <strong>Biologia 2º Período</strong><br>
                        • Tecido Epitelial<br>
                        • Tecido Conjuntivo<br>
                        • Tecido Muscular<br>
                        • Tecido Nervoso<br>
                        <br>
                    `
                        },
                    ]
                }
            ]
        },
        {
            period: "2º Período: Ciclo Biológico", desc: "Funcionamento orgânico", subjects: [
                {
                    id: "bio3", icon: "🫀", name: "Fisiologia Humana", hours: "270h", trilha: [
                        { tipo: "base", titulo: "Sistema Digestório", desc: `<strong>Biologia 2º ano</strong><br>• Órgãos e Enzimas<br>• Glândulas Anexasl<br><br>` },
                        { tipo: "base", titulo: "Sistema Endócrino", desc: `<strong>Biologia 2º ano</strong><br>• Pâncreas<br>• Tireoide<br>• Suprarrenais<br>• Hipófise<br><br>` },
                        { tipo: "base", titulo: "Sistema Cardiovascular", desc: `<strong>Biologia 2º ano</strong><br>• Coraçãos<br>• Grande e Pequena Circulação<br>• Vasos<br><br>` },
                        { tipo: "base", titulo: "Sistema Respiratório", desc: `<strong>Biologia 2º ano</strong><br>• Hematose<br>• Transporte de Gases<br>• Mecânica Respiratória<br>• Controle do pH Sanguíneo<br><br>` },
                        { tipo: "base", titulo: "Sistema Excretor", desc: `<strong>Biologia 2º ano</strong><br>• Néfron<br>• Hormônio ADH<br>• Excreção de Nitrogênio<br><br>` },
                        { tipo: "base", titulo: "Sistema Nervoso", desc: `<strong>Biologia 2º ano</strong><br>• Neurônio<br>• Sinapse<br>• Divisão<br>• Ato Reflexo<br><br>` },
                        { tipo: "faculdade", titulo: "Fisiologia Renal", desc: `<strong>Fisiologia I 2º Período</strong><br>• Mecanismo de Contracorrente<br>• Sistema Renina-Angiotensina-Aldosterona (SRAA)<br>• Clareamento<br>• Regulação do pH<br><br>` },
                        { tipo: "faculdade", titulo: "Neurofisiologia", desc: `<strong>Fisiologia II 3º Período</strong><br>• Potencial de Repouso e Potencial de Ação<br>• Sinapses Químicas<br>• Sistema Nervoso Autônomo<br><br>` },
                    ]
                },
                {
                    id: "bio4", icon: "🦠", name: "Microbiologia", hours: "270h", trilha: [
                        { tipo: "base", titulo: "Reino Monera", desc: `<strong>Biologia 2º ano</strong><br>• Estrutura Celular<br>• Formas<br>• Reprodução e Variabilidade<br>• Importância Ecológica<br>• Bacterioses<br><br>` },
                        { tipo: "base", titulo: "Virologia", desc: `<strong>Biologia 2º ano</strong><br>• Características Gerais<br>• Estrutura<br>• Ciclos Reprodutivos<br>• Retrovírus<br>• Viroses<br><br>` },
                        { tipo: "faculdade", titulo: "Genética Bacteriana e Resistência a Antibióticos", desc: `<strong>Microbiologia Geral 2º periodo</strong><br>• Plasmídeos<br>• Transferência Horizontal de Genes<br>• Mecanismos de Resistência<br><br>` },
                        { tipo: "faculdade", titulo: "Curva de Crescimento e Metabolismo Microbiano", desc: `<strong>Microbiologia Médica 4º periodo</strong><br>• Fases do Crescimento<br>• Meios de Cultura<br>• Controle Microbiano<br><br>` },
                    ]
                }
            ]
        },
        {
            period: "3º Período: Genética e Defesa", desc: "DNA e Imunidade", subjects: [
                {
                    id: "bio5", icon: "🧬", name: "Genética Humana", hours: "240h", trilha: [
                        { tipo: "base", titulo: "Sistema ABO e Fator Rh (Polialelia e Codominância)", desc: `<strong>Biologia 3º ano</strong><br>• Codominância<br>• Relação de Dominância<br>• Transfusões Sanguíneas<br>• Eritroblastose Fetal<br><br>` },
                        { tipo: "base", titulo: "Herança Ligada ao Sexo (Herança Gonossômica)", desc: `<strong>Biologia 3º ano</strong><br>• Herança Recessiva Ligada ao X<br>• Herança Restrita ao Sexo<br>• Herança Influenciada pelo Sexo<br><br>` },
                        { tipo: "faculdade", titulo: "Epigenética", desc: `<strong>Genética Médica 3º periodo</strong><br>• Metilação do DNA<br>• Modificações de Histonas<br>• RNAs não-codificantes<br>• Influência Ambiental e Programação Fetal<br><br>` },
                    ]
                },
                {
                    id: "bio6", icon: "🛡️", name: "Imunologia Básica", hours: "240h", trilha: [
                        { tipo: "base", titulo: "Imunização Ativa", desc: `<strong>Biologia 2º ano</strong><br>• Imunização Ativa Natural<br>• Imunização Ativa Artificial<br>• Células de Memória<br><br>` },
                        { tipo: "faculdade", titulo: "Estrutura e Genética do MHC", desc: `<strong>Imunologia Celular 3º periodo</strong><br>• MHC de Classe I<br>• MHC de Classe II<br>• Polimorfismo e Poligenia<br><br>` },
                    ]
                }
            ]
        }
    ],

    civil: [
        {
            period: "1º Período: Ciclo Básico", desc: "Matemática e Física", subjects: [
                {
                    id: "civ1", icon: "📐", name: "Cálculo Diferencial I", hours: "225h", trilha: [
                        { tipo: "base", titulo: "Funções", desc: `<strong>Matemática 1º ano</strong><br>• Conceitos Básicos<br>• Função Afim (1º Grau)<br>• Função Quadrática (2º Grau)<br>• Função Exponencial<br>• Função Logarítmica (2º Grau)<br>• Funções Compostas e Inversas<br><br>` },
                        { tipo: "base", titulo: "Trigonometria", desc: `<strong>Matemática 2º ano</strong><br>• Trigonometria no Triângulo Retângulo<br>• Ciclo Trigonométrico<br>• Sinais nos Quadrantes<br>• Gráficos Trigonométricos<br>• Identidades Trigonométricas<br>• Transformações e Arcos Duplos<br><br>` },
                        { tipo: "faculdade", titulo: "Limites", desc: `<strong>Cálculo Diferencial e Integral I 1º periodo</strong><br>• Ideia Intuitiva e Definição Formal<br>• Limites Laterais<br>• Propriedades dos Limites<br>• Indeterminações Matemáticas<br>• Limites no Infinito e Limites Infinitos<br>• Limites Fundamentais<br>• Continuidade<br><br>` },
                        { tipo: "faculdade", titulo: "Derivadas", desc: `<strong>Cálculo Diferencial e Integral I 1º periodo</strong><br>• MDefinição de Derivada por Limite<br>• Regras Básicas de Derivação<br>• Regra do Produto e do Quociente<br>• Regra da Cadeia<br>• Derivadas de Funções Transcendentes<br>• Derivação Implícita<br>• Regra de L'Hôpitalbr><br>` },
                    ]
                },
                {
                    id: "civ2", icon: "⚙️", name: "Física Geral I", hours: "225h", trilha: [
                        { tipo: "base", titulo: "Dinâmica", desc: `<strong>Física 1º ano</strong><br>• As Três Leis de Newton<br>• Tipos de Forças<br>• Trabalho e Energia<br>• Impulso e Quantidade de Movimento<br>• Dinâmica do Movimento Circular<br><br>` },
                        { tipo: "faculdade", titulo: "Dinâmica do Corpo Rígido", desc: `<strong>Mecânica Clássica 1º periodo</strong><br>• Cinemática Rotacional<br>• Torque<br>• Momento de Inércia<br>• A Segunda Lei de Newton para Rotações<br>• Rolamento<br>• Momento Angular e sua Conservação<br><br>` },
                    ]
                }
            ]
        },
        {
            period: "2º Período: Avançando nas Exatas", desc: "Mais Cálculos", subjects: [
                {
                    id: "civ3", icon: "📈", name: "Cálculo Integral II", hours: "225h", trilha: [
                        { tipo: "base", titulo: "Geometria Espacial", desc: `<strong>Matemática 2º ano</strong><br>• Geometria de Posição<br>• Poliedros e a Relação de Euler<br>• Prismas e Paralelepípedos<br>• Pirâmides<br>• Corpos Redondos<br>• Troncos<br><br>` },
                        { tipo: "faculdade", titulo: "Integrais Múltiplas", desc: `<strong>Cálculo Vetorial 2º periodo</strong><br>• Integrais Duplas<br>• Aplicações de Integrais Duplas<br>• Integrais Triplas<br>• Mudança de Variáveis<br>• O Jacobiano<br>• Aplicações na Física<br><br>` },
                    ]
                },
                {
                    id: "civ4", icon: "🌡️", name: "Física Geral II", hours: "225h", trilha: [
                        { tipo: "base", titulo: "Termologia", desc: `<strong>Física 2º ano</strong><br>• Temperatura e Calor<br>• Escalas Termométricas<br>• Dilatação Térmica<br>• Calorimetria<br>• Propagação do Calor<br>• Estudo dos Gases Ideais<br><br>` },
                        { tipo: "faculdade", titulo: "Termodinâmica", desc: `<strong>Termodinâmica 3º periodo</strong><br>• A Lei Zero<br>• A Primeira Lei da Termodinâmica<br>• Teoria Cinética dos Gases<br>• Máquinas Térmicas e Refrigeradores<br>• A Segunda Lei da Termodinâmica<br>• Ciclo de Carnot<br>• Entropia<br><br>` },
                    ]
                }
            ]
        },
        {
            period: "3º Período: Engenharia Aplicada", desc: "Entrando na Profissão", subjects: [
                {
                    id: "civ5", icon: "🏗️", name: "Resistência dos Materiais", hours: "270h", trilha: [
                        { tipo: "base", titulo: "Força Elástica", desc: `<strong>Física 1º ano</strong><br>• Lei de Hooke<br>• Constante Elástica<br>• Associação de Molas<br>• Energia Potencial Elástica<br>• Trabalho da Força Elástica<br><br>` },
                        { tipo: "faculdade", titulo: "Tensão", desc: `<strong>Mecânica dos Sólidos 3º periodo</strong><br>• Tensão Normal<br>• Tensão de Cisalhamento<br>• O Diagrama Tensão-Deformação<br>• Lei de Hooke Generalizada<br>• Coeficiente de Poisson<br>• Tensão Admissível e Fator de Segurança<br><br>` },
                        { tipo: "faculdade", titulo: "Diagramas de Esforços em Vigas", desc: `<strong>Mecânica dos Sólidos 4º periodo</strong><br>• Tipos de Apoios<br>• Cálculo das Reações de Apoio<br>• Diagrama de Esforço Normal<br>• Diagrama de Esforço Cortante<br>• Diagrama de Momento Fletor<br>• Relações Diferenciais<br>• Método das Seções<br><br>` },
                    ]
                },
                {
                    id: "civ6", icon: "🖥️", name: "Desenho Técnico", hours: "240h", trilha: [
                        { tipo: "base", titulo: "Projeções Ortogonais", desc: `<strong>Matemática 2º ano</strong><br>• O Método de Monge<br>• Os Diedros<br>• As Seis Vistas Principais<br>• Linhas Visíveis e Ocultas<br>• Perspectiva Isométrica<br><br>` },
                        { tipo: "faculdade", titulo: "Cortes", desc: `<strong>Expressão Gráfica 1º periodo</strong><br>• Planos de Corte<br>• Hachuras<br>• Corte Total<br>• Meio-Corte<br>• Corte em Desvio<br>• Corte Parcial<br>• Omissão de Corte<br>• Seções<br><br>` },
                    ]
                }
            ]
        }
    ],

    contabilidade: [
        {
            period: "1º Período: Fundamentos", desc: "Introdução aos negócios", subjects: [
                {
                    id: "cont1", icon: "📈", name: "Matemática Financeira", hours: "225h", trilha: [
                        { tipo: "base", titulo: "Juros Compostos", desc: `<strong>Matemática 1º ano</strong><br>• Conceitos Fundamentais<br>• Juros Simples vs Juros Compostos<br>• Fórmula do Montante<br>• Taxas Equivalentes<br>• Desconto Composto<br>• Inflação e Taxa Real<br><br>` },
                        { tipo: "base", titulo: "Progressão Geométrica", desc: `<strong>Matemática 1º ano</strong><br>• Definição e Razão<br>• Classificação das PGs<br>• Fórmula do Termo Geral<br>• Soma dos Termos de uma PG Finita<br>• Soma dos Termos de uma PG Infinita<br>• Interpolação Geométrica<br><br>` },
                        { tipo: "faculdade", titulo: "Análise de Investimentos", desc: `<strong>Administração Financeira 3º periodo</strong><br>• O Valor do Dinheiro no Tempo<br>• Fluxo de Caixa<br>• Taxa Mínima de Atratividade<br>• Payback Simples e Descontado<br>• Valor Presente Líquido<br>• Taxa Interna de Retorno<br>• Comparação de Projetos<br>• Seções<br><br>` },
                    ]
                },
                {
                    id: "cont2", icon: "📘", name: "Contabilidade Introdutória", hours: "225h", trilha: [
                        { tipo: "base", titulo: "Orçamento Pessoal", desc: `<strong>Educação Financeira 1º ano</strong><br>• Mapeamento de Receitas<br>• Classificação de Despesas<br>• Fluxo de Caixa Pessoal<br>• Regra 50-30-20<br>• Reserva de Emergência<br>• Diagnóstico Financeiro<br><br>` },
                        { tipo: "faculdade", titulo: "Estruturação do Balanço Patrimonial", desc: `<strong>Contabilidade Geral 2º periodo</strong><br>• Equação Patrimonial<br>• Ativos<br>• Passivos<br>• Patrimônio Líquido<br>• Método das Partidas Dobradas<br>• Plano de Contas<br>• Grau de Liquidez e Exigibilidade<br><br>` },
                    ]
                }
            ]
        },
        {
            period: "2º Período: Intermediário", desc: "Aprofundando os registros", subjects: [
                {
                    id: "cont3", icon: "📊", name: "Contabilidade Intermediária", hours: "270h", trilha: [
                        { tipo: "base", titulo: "Interpretação de Texto", desc: `<strong>Português 2º e 3º ano</strong><br>• Leitura Crítica e Compreensão<br>• Análise de Textos Técnicos<br>• Sintaxe e Coesão<br>• Atenção a detalhes corporativos<br>` },
                        { tipo: "faculdade", titulo: "DRE - Demonstração de Resultado", desc: `<strong>Contabilidade Intermediária 3º Período</strong><br>• Receitas Operacionais e Deduções<br>• Custo da Mercadoria Vendida (CMV)<br>• Despesas Operacionais e Não Operacionais<br>• Apuração do Lucro ou Prejuízo Líquido<br>` },
                        { tipo: "faculdade", titulo: "Fluxo de Caixa", desc: `<strong>Contabilidade Intermediária 4º Período</strong><br>• Atividades Operacionais<br>• Atividades de Investimento<br>• Atividades de Financiamento<br>• Método Direto vs Método Indireto<br>` }
                    ]
                },
                {
                    id: "cont4", icon: "⚖️", name: "Direito Empresarial", hours: "240h", trilha: [
                        { tipo: "base", titulo: "Cidadania e Direitos", desc: `<strong>Sociologia 1º e 2º ano</strong><br>• Direitos do Cidadão<br>• Noções Básicas de Contratos<br>• Código de Defesa do Consumidor<br>• Deveres Civis e Ética<br>` },
                        { tipo: "faculdade", titulo: "Tipos de Sociedade", desc: `<strong>Direito Empresarial 3º Período</strong><br>• Sociedade Limitada (LTDA)<br>• Sociedade Anônima (S.A.)<br>• Microempreendedor Individual (MEI)<br>• Contrato Social e Estatuto<br>• Falência e Recuperação Judicial<br>` }
                    ]
                }
            ]
        },
        {
            period: "3º Período: Tributos e Custos", desc: "A Realidade do Mercado", subjects: [
                {
                    id: "cont5", icon: "🏛️", name: "Legislação Tributária", hours: "270h", trilha: [
                        { tipo: "base", titulo: "O que são Impostos?", desc: `<strong>Sociologia e Geografia 3º ano</strong><br>• O Papel do Estado e Arrecadação<br>• Retorno Social dos Impostos<br>• Carga Tributária no Brasil<br>• Sonegação vs Elisão Fiscal<br>` },
                        { tipo: "faculdade", titulo: "Impostos Diretos e Indiretos", desc: `<strong>Direito Tributário 4º Período</strong><br>• Simples Nacional, Lucro Presumido e Real<br>• Impostos Federais (PIS, COFINS, IRPJ, CSLL)<br>• Impostos Estaduais (ICMS)<br>• Impostos Municipais (ISS)<br>• Obrigações Acessórias<br>` }
                    ]
                },
                {
                    id: "cont6", icon: "💰", name: "Contabilidade de Custos", hours: "240h", trilha: [
                        { tipo: "base", titulo: "Operações Matemáticas", desc: `<strong>Matemática 1º e 2º ano</strong><br>• Operações Fundamentais<br>• Regra de Três Simples e Composta<br>• Porcentagem e Proporção<br>• Leitura de Planilhas e Tabelas<br>` },
                        { tipo: "faculdade", titulo: "Custeio por Absorção e Variável", desc: `<strong>Contabilidade de Custos 5º Período</strong><br>• Diferença entre Custos e Despesas<br>• Custos Diretos e Indiretos<br>• Rateio de Custos Indiretos (CIF)<br>• Margem de Contribuição<br>• Ponto de Equilíbrio<br>` }
                    ]
                }
            ]
        }
    ],

    administracao: [
        {
            period: "1º Período: Fundamentos da Gestão", desc: "Introdução à administração", subjects: [
                {
                    id: "adm1", icon: "🏢", name: "Teoria Geral da Administração", hours: "225h", trilha: [
                        { tipo: "base", titulo: "Capitalismo e Burocracia", desc: `<strong>História 2º e 3º ano</strong><br>• Revoluções Industriais (1ª, 2ª e 3ª)<br>• Modelos de Produção (Fordismo, Toyotismo)<br>• Crise de 1929 e Neoliberalismo<br><br><strong>Sociologia 2º ano</strong><br>• Max Weber e o Modelo Burocrático<br>• Karl Marx e as Relações de Trabalho<br>• Hierarquia e Divisão do Trabalho<br>` },
                        { tipo: "faculdade", titulo: "Escolas Administrativas", desc: `<strong>TGA 1º Período</strong><br>• Escola Científica (Frederick Taylor)<br>• Escola Clássica (Henry Fayol)<br>• Escola das Relações Humanas (Elton Mayo)<br>• Teoria Sistêmica e Contingencial<br>` },
                        { tipo: "faculdade", titulo: "Processo Organizacional", desc: `<strong>TGA 2º Período</strong><br>• O Ciclo PODC: Planejar, Organizar, Dirigir e Controlar<br>• Desenho Organizacional (Organogramas)<br>• Níveis: Estratégico, Tático e Operacional<br>• Cultura e Clima Organizacional<br>` }
                    ]
                },
                {
                    id: "adm2", icon: "📊", name: "Estatística Aplicada", hours: "225h", trilha: [
                        { tipo: "base", titulo: "Estatística Básica e Probabilidade", desc: `<strong>Matemática 2º ano</strong><br>• Análise Combinatória e Fatorial<br>• Conceitos de Probabilidade<br><br><strong>Matemática 3º ano</strong><br>• Estatística Descritiva (Média, Moda, Mediana)<br>• Medidas de Dispersão (Desvio Padrão, Variância)<br>• Leitura e Interpretação de Gráficos e Tabelas<br>` },
                        { tipo: "faculdade", titulo: "Probabilidade Aplicada", desc: `<strong>Estatística I 2º Período</strong><br>• Teorema de Bayes<br>• Distribuição de Probabilidade Discreta (Binomial)<br>• Distribuição Contínua (Curva Normal)<br>• Teorema Central do Limite<br>` },
                        { tipo: "faculdade", titulo: "Inferência e Amostragem", desc: `<strong>Estatística II 3º Período</strong><br>• Técnicas de Amostragem<br>• Intervalos de Confiança<br>• Teste de Hipóteses para Tomada de Decisão<br>• Correlação e Regressão Linear Simples<br>` }
                    ]
                }
            ]
        },
        {
            period: "2º Período: Gestão de Pessoas e Mercado", desc: "RH e Marketing", subjects: [
                {
                    id: "adm3", icon: "👥", name: "Gestão de Pessoas", hours: "270h", trilha: [
                        { tipo: "base", titulo: "Comportamento e Comunicação", desc: `<strong>Filosofia 2º ano</strong><br>• Ética Moral nas Relações Humanas<br>• Inteligência Emocional e Resolução de Conflitos<br><br><strong>Português 2º e 3º ano</strong><br>• Comunicação Assertiva e Feedback<br>• Interpretação e Redação Corporativa<br>• Oratória e Apresentação em Público<br>` },
                        { tipo: "faculdade", titulo: "Subsistemas de RH", desc: `<strong>Gestão de RH 3º Período</strong><br>• Atração e Retenção de Talentos<br>• Recrutamento e Seleção (Entrevistas por Competência)<br>• Cargos e Salários (Remuneração Estratégica)<br>• Avaliação de Desempenho<br>` },
                        { tipo: "faculdade", titulo: "Treinamento e Liderança", desc: `<strong>Comportamento Organizacional 4º Período</strong><br>• Levantamento de Necessidades de Treinamento (LNT)<br>• Estilos de Liderança (Autocrática, Democrática, Situacional)<br>• Teorias de Motivação (Maslow, Herzberg, McClelland)<br>• Gestão da Mudança Organizacional<br>` }
                    ]
                },
                {
                    id: "adm4", icon: "💰", name: "Gestão de Marketing", hours: "240h", trilha: [
                        { tipo: "base", titulo: "Geopolítica e Consumo", desc: `<strong>Geografia 3º ano</strong><br>• Redes de Comunicação e Globalização<br>• Sociedade de Consumo e Indústria Cultural<br><br><strong>Arte e Linguagens 2º ano</strong><br>• Semiótica (Estudo dos Signos e Logotipos)<br>• Funções da Linguagem na Publicidade (Função Apelativa)<br>` },
                        { tipo: "faculdade", titulo: "Fundamentos e Mix de Marketing", desc: `<strong>Marketing I 3º Período</strong><br>• O Comportamento do Consumidor<br>• Os 4 Ps (Produto, Preço, Praça e Promoção)<br>• Ciclo de Vida do Produto<br>• Canais de Distribuição e Logística<br>` },
                        { tipo: "faculdade", titulo: "Marketing Estratégico", desc: `<strong>Marketing II 4º Período</strong><br>• Segmentação de Mercado e Público-Alvo (Persona)<br>• Posicionamento de Marca (Branding)<br>• Pesquisa de Mercado (Qualitativa e Quantitativa)<br>• Marketing Digital e Inbound Marketing<br>` }
                    ]
                }
            ]
        },
        {
            period: "3º Período: Estratégia e Finanças", desc: "Planejamento estrutural", subjects: [
                {
                    id: "adm5", icon: "🎯", name: "Planejamento Estratégico", hours: "270h", trilha: [
                        { tipo: "base", titulo: "Análise de Cenários", desc: `<strong>Geografia 3º ano</strong><br>• Blocos Econômicos (Mercosul, UE)<br>• Dinâmica do Comércio Internacional<br><br><strong>Filosofia e Sociologia 3º ano</strong><br>• Racionalidade Limitada e Tomada de Decisão<br>• Responsabilidade Social Corporativa (ESG)<br>` },
                        { tipo: "faculdade", titulo: "Diretrizes e Diagnóstico", desc: `<strong>Planejamento Estratégico 5º Período</strong><br>• Identidade Organizacional (Missão, Visão e Valores)<br>• Análise do Ambiente Externo (Matriz PESTEL)<br>• Análise do Ambiente Interno e Externo (Matriz SWOT/FOFA)<br>• As 5 Forças Competitivas de Michael Porter<br>` },
                        { tipo: "faculdade", titulo: "Execução e Controle", desc: `<strong>Gestão Estratégica 6º Período</strong><br>• Matriz BCG (Estrela, Vaca Leiteira, Abacaxi)<br>• Balanced Scorecard (BSC) e Mapas Estratégicos<br>• Indicadores Chave de Desempenho (KPIs)<br>• Metodologia OKR (Objectives and Key Results)<br>` }
                    ]
                },
                {
                    id: "adm6", icon: "📈", name: "Administração Financeira", hours: "240h", trilha: [
                        { tipo: "base", titulo: "Matemática Financeira", desc: `<strong>Matemática 1º e 2º ano</strong><br>• Porcentagem e Proporção<br>• Funções Exponenciais (Crescimento de Capital)<br>• Juros Simples e Juros Compostos<br>• Descontos e Séries Uniformes de Pagamento<br>` },
                        { tipo: "faculdade", titulo: "Análise de Investimentos", desc: `<strong>Finanças I 4º Período</strong><br>• Custo de Oportunidade e Valor do Dinheiro no Tempo<br>• Valor Presente Líquido (VPL)<br>• Taxa Interna de Retorno (TIR)<br>• Payback (Simples e Descontado)<br>` },
                        { tipo: "faculdade", titulo: "Finanças Corporativas", desc: `<strong>Finanças II 5º Período</strong><br>• Análise de Balanço Patrimonial e DRE<br>• Gestão do Capital de Giro<br>• Alavancagem Operacional e Financeira<br>• Estrutura de Capital e Custos de Financiamento<br>` }
                    ]
                }
            ]
        }
    ],

    direito: [
        {
            period: "1º Período: Introdução ao Direito", desc: "Fundamentos jurídicos", subjects: [
                {
                    id: "dir1", icon: "⚖️", name: "Introdução e Teoria do Direito", hours: "225h", trilha: [
                        { tipo: "base", titulo: "Filosofia Política e Contratualistas", desc: `<strong>Filosofia 1º e 2º ano</strong><br>• O conceito de Justiça em Platão e Aristóteles<br>• Ética, Moral e Liberdade<br><br><strong>Sociologia 2º ano</strong><br>• Contratualistas (Hobbes, Locke, Rousseau)<br>• A formação do Estado e o Monopólio da Força (Weber)<br>• Cidadania e Direitos Sociais<br>` },
                        { tipo: "faculdade", titulo: "Fontes e Ramos do Direito", desc: `<strong>Introdução ao Estudo do Direito 1º Período</strong><br>• Direito Público vs Direito Privado<br>• Direito Natural (Jusnaturalismo) vs Positivo (Juspositivismo)<br>• Fontes Formais (Lei, Costumes)<br>• Fontes Materiais (Doutrina, Jurisprudência)<br>` },
                        { tipo: "faculdade", titulo: "A Norma Jurídica", desc: `<strong>Teoria Geral do Direito 2º Período</strong><br>• Vigência, Validade e Eficácia da Lei<br>• Hermenêutica (Interpretação das Normas)<br>• Integração do Direito (Analogia, Princípios Gerais)<br>• Antinomias Jurídicas (Conflito entre Leis)<br>` }
                    ]
                },
                {
                    id: "dir2", icon: "📜", name: "Direito Constitucional", hours: "225h", trilha: [
                        { tipo: "base", titulo: "História das Constituições Brasileiras", desc: `<strong>História 3º ano</strong><br>• Constituição Outorgada de 1824 (Poder Moderador)<br>• A Era Vargas e a Constituição de 1934/1937<br>• O Regime Militar (1964) e AI-5<br>• Redemocratização e a Constituição Cidadã (1988)<br><br><strong>Sociologia 3º ano</strong><br>• Declaração Universal dos Direitos Humanos<br>` },
                        { tipo: "faculdade", titulo: "Teoria da Constituição", desc: `<strong>Direito Constitucional I 2º Período</strong><br>• Poder Constituinte (Originário e Derivado)<br>• Princípios Fundamentais do Estado Brasileiro<br>• Direitos e Garantias Individuais (Art. 5º da CF)<br>• Remédios Constitucionais (Habeas Corpus, Mandado de Segurança)<br>` },
                        { tipo: "faculdade", titulo: "Organização do Estado e Poderes", desc: `<strong>Direito Constitucional II 3º Período</strong><br>• Repartição de Competências (União, Estados, Municípios)<br>• Poder Executivo, Legislativo e Judiciário<br>• Processo Legislativo (Como nasce uma lei)<br>• Controle de Constitucionalidade (STF, ADI, ADC, ADPF)<br>` }
                    ]
                }
            ]
        },
        {
            period: "2º Período: Relações Civis e Privadas", desc: "O dia a dia jurídico", subjects: [
                {
                    id: "dir3", icon: "📝", name: "Direito Civil - Parte Geral", hours: "270h", trilha: [
                        { tipo: "base", titulo: "O Indivíduo e a Sociedade", desc: `<strong>Filosofia 2º ano</strong><br>• O Sujeito de Direitos e a Autonomia Privada<br>• O conceito de Dignidade da Pessoa Humana<br><br><strong>Sociologia 1º e 2º ano</strong><br>• A Família como Instituição Social<br>• O conceito de Propriedade Privada<br>• A Função Social das Instituições<br>` },
                        { tipo: "faculdade", titulo: "Pessoas Físicas e Jurídicas", desc: `<strong>Direito Civil I 3º Período</strong><br>• Início da Personalidade e Nascituro<br>• Capacidade Civil (Absoluta e Relativa) e Emancipação<br>• Direitos da Personalidade (Imagem, Honra, Nome)<br>• Pessoas Jurídicas (Fundações, Associações)<br>• Desconsideração da Personalidade Jurídica<br>` },
                        { tipo: "faculdade", titulo: "Bens e Negócios Jurídicos", desc: `<strong>Direito Civil II 4º Período</strong><br>• Classificação dos Bens (Móveis, Imóveis, Fungíveis)<br>• Fato, Ato e Negócio Jurídico<br>• Elementos de Validade (Agente Capaz, Objeto Lícito)<br>• Defeitos do Negócio (Erro, Dolo, Coação, Fraude)<br>• Nulidade Absoluta x Anulabilidade<br>` }
                    ]
                },
                {
                    id: "dir4", icon: "🏠", name: "Direito das Obrigações", hours: "240h", trilha: [
                        { tipo: "base", titulo: "Educação Financeira e Lógica", desc: `<strong>Educação Financeira (Matemática) 2º ano</strong><br>• Leitura de Contratos Básicos e Juros Abusivos<br>• Cheques, Promissórias e Garantias<br><br><strong>Filosofia 3º ano</strong><br>• Causalidade e Responsabilidade<br>• Boa-fé e Ação Moral<br>` },
                        { tipo: "faculdade", titulo: "Teoria Geral das Obrigações", desc: `<strong>Direito Civil III 4º Período</strong><br>• Elementos da Obrigação (Credor, Devedor, Objeto)<br>• Obrigações de Dar (Coisa Certa e Incerta)<br>• Obrigações de Fazer e Não Fazer<br>• Obrigações Solidárias e Alternativas<br>• Transmissão das Obrigações (Cessão de Crédito)<br>` },
                        { tipo: "faculdade", titulo: "Adimplemento e Inadimplemento", desc: `<strong>Direito Civil IV 5º Período</strong><br>• Formas de Pagamento e Consignação<br>• Inadimplemento Absoluto vs Mora<br>• Perdas e Danos (Danos Emergentes e Lucros Cessantes)<br>• Cláusula Penal (Multa) e Arras (Sinal)<br>• Juros Legais e Correção Monetária<br>` }
                    ]
                }
            ]
        },
        {
            period: "3º Período: Sistema Penal e Processual", desc: "Punição e tramitação", subjects: [
                {
                    id: "dir5", icon: "🔒", name: "Direito Penal", hours: "270h", trilha: [
                        { tipo: "base", titulo: "Violência e Controle Social", desc: `<strong>Sociologia 3º ano</strong><br>• Michel Foucault: Vigiar e Punir (Sistema Carcerário)<br>• Desigualdade Social e Criminalidade<br>• Violência Simbólica e Física<br><br><strong>Filosofia 2º ano</strong><br>• Imputabilidade (Livre-arbítrio e Consciência)<br>• Legítima Defesa e Sobrevivência<br>` },
                        { tipo: "faculdade", titulo: "Teoria Geral do Crime", desc: `<strong>Direito Penal I 3º Período</strong><br>• Fato Típico (Conduta, Resultado, Nexo Causal e Tipicidade)<br>• Ilicitude (Legítima Defesa, Estado de Necessidade)<br>• Culpabilidade (Imputabilidade, Exigibilidade de Conduta)<br>• Erro de Tipo e Erro de Proibição<br>• Tentativa e Consumação<br>` },
                        { tipo: "faculdade", titulo: "Teoria da Pena", desc: `<strong>Direito Penal II 4º Período</strong><br>• Penas Privativas de Liberdade (Reclusão e Detenção)<br>• Penas Restritivas de Direitos e Multa<br>• Dosimetria da Pena (Como o juiz calcula o tempo)<br>• Concurso de Pessoas e Concurso de Crimes<br>• Suspensão Condicional da Pena (Sursis)<br>` }
                    ]
                },
                {
                    id: "dir6", icon: "⚙️", name: "Direito Processual Civil", hours: "240h", trilha: [
                        { tipo: "base", titulo: "Argumentação e Retórica", desc: `<strong>Português / Redação 3º ano</strong><br>• Texto Dissertativo-Argumentativo<br>• Coesão, Coerência e Persuasão<br><br><strong>Filosofia 2º ano</strong><br>• Lógica Formal (Aristotélica) e Silogismos<br>• Premissas e Conclusões (A base das sentenças judiciais)<br>` },
                        { tipo: "faculdade", titulo: "Fase de Conhecimento", desc: `<strong>Processo Civil I 4º Período</strong><br>• A Petição Inicial (Requisitos, Pedido, Valor da Causa)<br>• Citação e Resposta do Réu (Contestação, Reconvenção)<br>• Audiência de Conciliação e Mediação<br>• Fase Instrutória (Provas Documentais, Periciais e Testemunhais)<br>• A Sentença Judicial<br>` },
                        { tipo: "faculdade", titulo: "Sistema Recursal", desc: `<strong>Processo Civil II 5º Período</strong><br>• Teoria Geral dos Recursos<br>• Recurso de Apelação<br>• Agravo de Instrumento e Agravo Interno<br>• Embargos de Declaração<br>• Recursos aos Tribunais Superiores (REsp e RE)<br>` }
                    ]
                }
            ]
        }
    ],

    psicologia: [
        {
            period: "1º Período: Fundamentos da Psicologia", desc: "História e teorias", subjects: [
                {
                    id: "psi1", icon: "🧠", name: "História e Matrizes da Psicologia", hours: "225h", trilha: [
                        { tipo: "base", titulo: "Filosofia da Mente", desc: `<strong>Filosofia 1º e 2º ano</strong><br>• Sócrates, Platão e o conceito de Alma<br>• René Descartes (Dualismo Corpo-Mente)<br>• Empirismo (John Locke) vs Racionalismo<br>• Fenomenologia e Existencialismo (Sartre)<br>` },
                        { tipo: "faculdade", titulo: "O Nascimento da Psicologia Científica", desc: `<strong>História da Psicologia 1º Período</strong><br>• Wilhelm Wundt e o Laboratório de Leipzig<br>• Estruturalismo (Edward Titchener)<br>• Funcionalismo (William James)<br>• A ruptura com a Filosofia<br>` },
                        { tipo: "faculdade", titulo: "Behaviorismo", desc: `<strong>Análise do Comportamento 2º Período</strong><br>• Condicionamento Clássico (Ivan Pavlov)<br>• Behaviorismo Metodológico (John B. Watson)<br>• Behaviorismo Radical e Condicionamento Operante (B.F. Skinner)<br>• Reforço, Punição e Extinção<br>` }
                    ]
                },
                {
                    id: "psi2", icon: "📚", name: "Psicologia do Desenvolvimento", hours: "225h", trilha: [
                        { tipo: "base", titulo: "Genética, Cérebro e Sociedade", desc: `<strong>Biologia 3º ano</strong><br>• Genética (Hereditariedade vs Ambiente)<br>• Neuroplasticidade e Maturação Cerebral<br><br><strong>Sociologia 2º ano</strong><br>• Socialização Primária e Secundária<br>• Juventude, Identidade e Mudanças Físicas<br>` },
                        { tipo: "faculdade", titulo: "Desenvolvimento Cognitivo", desc: `<strong>Psicologia do Desenvolvimento I 2º Período</strong><br>• Epistemologia Genética de Jean Piaget<br>• Fases: Sensório-motor, Pré-operatório, Operatório Concreto e Formal<br>• Teoria Sócio-Histórica de Lev Vygotsky<br>• Zona de Desenvolvimento Proximal e Linguagem<br>` },
                        { tipo: "faculdade", titulo: "Desenvolvimento Psicanalítico e Psicossocial", desc: `<strong>Psicologia do Desenvolvimento II 3º Período</strong><br>• Fases Psicossexuais de Freud (Oral, Anal, Fálica, Latência, Genital)<br>• Teoria Psicossocial de Erik Erikson (8 estágios da vida)<br>• Teoria do Apego (John Bowlby)<br>• Envelhecimento e Luto<br>` }
                    ]
                }
            ]
        },
        {
            period: "2º Período: Processos Clínicos e Sociais", desc: "A mente e a sociedade", subjects: [
                {
                    id: "psi3", icon: "😔", name: "Psicopatologia", hours: "270h", trilha: [
                        { tipo: "base", titulo: "Neuroquímica e Saúde Coletiva", desc: `<strong>Biologia 2º ano</strong><br>• Sinapses e Neurotransmissores (Dopamina, Serotonina)<br>• Sistema Nervoso Central e Límbico (Emoções)<br><br><strong>Sociologia 3º ano</strong><br>• Michel Foucault: A História da Loucura<br>• O Normal e o Patológico na Sociedade<br>• O Estigma Social e Luta Antimanicomial<br>` },
                        { tipo: "faculdade", titulo: "Semiologia Psiquiátrica", desc: `<strong>Psicopatologia I 3º Período</strong><br>• Alterações da Consciência, Atenção e Memória<br>• Alterações do Pensamento e Percepção (Alucinações)<br>• Uso do DSM-5 e CID-11<br>• Transtornos de Ansiedade e Fobias<br>` },
                        { tipo: "faculdade", titulo: "Transtornos Maiores", desc: `<strong>Psicopatologia II 4º Período</strong><br>• Transtornos Depressivos e Bipolares<br>• Esquizofrenia e Outros Transtornos Psicóticos<br>• Transtornos de Personalidade (Borderline, Narcisista)<br>• Transtornos do Espectro Autista (TEA) e TDAH<br>` }
                    ]
                },
                {
                    id: "psi4", icon: "🗣️", name: "Psicologia Social", hours: "240h", trilha: [
                        { tipo: "base", titulo: "Comportamento Coletivo e Cultura", desc: `<strong>Sociologia 1º e 2º ano</strong><br>• Instituições Sociais (Família, Escola, Estado)<br>• Ideologia, Cultura e Indústria Cultural<br>• Preconceito, Racismo e Desigualdade Social<br><br><strong>História 3º ano</strong><br>• Movimentos de Massa e Fascismo<br>• Lutas por Direitos Civis<br>` },
                        { tipo: "faculdade", titulo: "Psicologia Social Psicológica", desc: `<strong>Psicologia Social I 4º Período</strong><br>• Cognição Social e Formação de Impressões<br>• Experimento de Conformidade (Asch) e Obediência (Milgram)<br>• Teoria da Dissonância Cognitiva (Leon Festinger)<br>• Atitudes, Estereótipos e Preconceito<br>` },
                        { tipo: "faculdade", titulo: "Psicologia Social Crítica", desc: `<strong>Psicologia Social II 5º Período</strong><br>• A Psicologia Social no Brasil (Silvia Lane)<br>• Identidade e Consciência de Classe<br>• Representações Sociais (Moscovici)<br>• Intervenção em Comunidades e Políticas Públicas<br>` }
                    ]
                }
            ]
        },
        {
            period: "3º Período: Terapias e Avaliação", desc: "Intervenção psicológica", subjects: [
                {
                    id: "psi5", icon: "🛋️", name: "Psicanálise e Abordagens", hours: "270h", trilha: [
                        { tipo: "base", titulo: "Mito, Inconsciente e Linguagem", desc: `<strong>Filosofia e Literatura 3º ano</strong><br>• A Mitologia Grega (Complexo de Édipo)<br>• O Surrealismo e a Arte do Inconsciente<br>• Schopenhauer e Nietzsche (Vontade e Desejo)<br>• A Crise do Sujeito Racional<br>` },
                        { tipo: "faculdade", titulo: "Fundamentos da Psicanálise", desc: `<strong>Psicanálise I 5º Período</strong><br>• Sigmund Freud: A Primeira Tópica (Inconsciente, Pré-consciente, Consciente)<br>• A Segunda Tópica (Id, Ego, Superego)<br>• Mecanismos de Defesa (Recalque, Projeção)<br>• A Interpretação dos Sonhos e Associação Livre<br>` },
                        { tipo: "faculdade", titulo: "Desdobramentos Clínicos", desc: `<strong>Teorias da Personalidade 6º Período</strong><br>• Carl Jung (Inconsciente Coletivo e Arquétipos)<br>• Jacques Lacan (O Estádio do Espelho e a Linguagem)<br>• Abordagem Centrada na Pessoa (Carl Rogers)<br>• Terapia Cognitivo-Comportamental (TCC - Aaron Beck)<br>` }
                    ]
                },
                {
                    id: "psi6", icon: "📋", name: "Avaliação Psicológica", hours: "240h", trilha: [
                        { tipo: "base", titulo: "Estatística e Metodologia", desc: `<strong>Matemática 2º e 3º ano</strong><br>• Estatística Descritiva (Média, Moda, Mediana)<br>• Medidas de Dispersão (Desvio Padrão, Variância)<br>• Leitura e Interpretação de Gráficos<br><br><strong>Metodologia Científica</strong><br>• Método Científico e Hipóteses<br>• Ética na Pesquisa<br>` },
                        { tipo: "faculdade", titulo: "Psicometria e Testes", desc: `<strong>Avaliação Psicológica I 5º Período</strong><br>• Validade, Fidedignidade e Padronização de Testes<br>• Testes de Inteligência e Cognição (WAIS, WISC)<br>• Testes de Personalidade (BFP, Palográfico)<br>• Testes Projetivos (Rorschach, TAT)<br>` },
                        { tipo: "faculdade", titulo: "Laudos e Entrevistas", desc: `<strong>Avaliação Psicológica II 6º Período</strong><br>• Técnicas de Entrevista Clínica (Anamnese)<br>• Observação Comportamental<br>• Elaboração de Documentos Psicológicos (Resolução CFP)<br>• Entrevista de Devolutiva<br>` }
                    ]
                }
            ]
        }
    ]
};

// ==========================================
// ESTADO GLOBAL
// ==========================================
let currentUserData = {};

// ==========================================
// RENDERIZAÇÃO DOS CURSOS
// ==========================================
function renderCurriculum(courseKey) {
    const container = document.getElementById('periodsContainer');
    if (!container) return;

    const data = coursesData[courseKey];
    if (!data) {
        container.innerHTML = '<p style="color: white;">Nenhuma disciplina cadastrada para este curso.</p>';
        return;
    }

    container.innerHTML = '';

    data.forEach((period, periodIndex) => {
        const col = document.createElement('div');
        col.className = 'period-column';

        let subjectsHTML = '';
        period.subjects.forEach(sub => {
            const baseContents = sub.trilha?.filter(item => item.tipo === 'base') || [];
            const faculdadeContents = sub.trilha?.filter(item => item.tipo === 'faculdade') || [];

            let trilhaHTML = '';

            if (baseContents.length > 0) {
                trilhaHTML += `
                    <div class="sub-modulo">
                        <div class="sub-header" onclick="toggleSubModulo(this, event)">
                            <span class="sub-title title-base">📚 Ensino Médio (Base)</span>
                            <button class="expand-btn-sm">+</button>
                        </div>
                        <div class="sub-content">
                            <ul class="trilha-list">
                                ${baseContents.map(item => `
                                    <li class="trilha-item">
                                        <div class="trilha-text">
                                            <span class="trilha-title">${item.titulo}</span>
                                            <span class="trilha-desc">${item.desc}</span>
                                        </div>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                `;
            }

            if (faculdadeContents.length > 0) {
                trilhaHTML += `
                    <div class="sub-modulo">
                        <div class="sub-header" onclick="toggleSubModulo(this, event)">
                            <span class="sub-title title-facul">🎓 Faculdade</span>
                            <button class="expand-btn-sm">+</button>
                        </div>
                        <div class="sub-content">
                            <ul class="trilha-list">
                                ${faculdadeContents.map(item => `
                                    <li class="trilha-item">
                                        <div class="trilha-text">
                                            <span class="trilha-title">${item.titulo}</span>
                                            <span class="trilha-desc">${item.desc}</span>
                                        </div>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                `;
            }

            if (baseContents.length === 0 && faculdadeContents.length === 0) {
                trilhaHTML = `<div class="sub-modulo"><div class="sub-content"><p style="padding:15px;">Nenhum conteúdo disponível</p></div></div>`;
            }

            subjectsHTML += `
                <div class="subject-card">
                    <div class="subject-header" onclick="toggleTrilha(this)">
                        <div class="subject-info">
                            <span class="subject-icon">${sub.icon}</span>
                            <div class="subject-text">
                                <h3>${sub.name}</h3>
                                <p>🕔 ${sub.hours}</p>
                            </div>
                        </div>
                        <button class="expand-btn">▼</button>
                    </div>
                    <div class="trilha-content">
                        ${trilhaHTML}
                    </div>
                </div>
            `;
        });

        col.innerHTML = `
            <div class="period-header">
                <h2 style="display: flex; align-items: center; justify-content: space-between;">
                    ${period.period}
                    <span class="period-settings-icon" data-course="${courseKey}" data-period="${periodIndex}" style="cursor: pointer; font-size: 16px; background: rgba(255,255,255,0.2); width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; border-radius: 8px;">⚙️</span>
                </h2>
                <p>${period.desc}</p>
            </div>
            ${subjectsHTML}
        `;
        container.appendChild(col);
    });

    document.querySelectorAll('.period-settings-icon').forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.stopPropagation();
            const courseKey = icon.getAttribute('data-course');
            const periodIndex = parseInt(icon.getAttribute('data-period'));
            openEditPeriodModal(courseKey, periodIndex);
        });
    });
}

// ==========================================
// PERFIL E SESSÃO
// ==========================================
function loadUserProfile() {
    let currentUser = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
    if (!currentUser) return;

    try {
        currentUserData = JSON.parse(currentUser);
    } catch (e) {
        console.error('Erro ao ler dados da sessão:', e);
        return;
    }

    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const fullUserData = registeredUsers.find(u => u.username === currentUserData.username || u.email === currentUserData.email);

    if (fullUserData) {
        currentUserData = { ...currentUserData, ...fullUserData };
    }

    const profileFullName = document.getElementById('profileFullName');
    if (profileFullName) {
        const fullName = `${currentUserData.firstName || ''} ${currentUserData.lastName || ''}`.trim();
        profileFullName.textContent = fullName || currentUserData.name || currentUserData.username || 'Usuário';
    }

    const profileUsername = document.getElementById('profileUsername');
    if (profileUsername) profileUsername.textContent = `@${currentUserData.username || 'usuario'}`;

    const profileEmail = document.getElementById('profileEmail');
    if (profileEmail) profileEmail.textContent = currentUserData.email || 'Não informado';

    const profileCourse = document.getElementById('profileCourse');
    if (profileCourse) {
        const courseName = currentUserData.courseName || currentUserData.course || 'Não informado';
        profileCourse.textContent = typeof courseName === 'string' ? courseName.toUpperCase() : courseName;
    }

    const profileSemester = document.getElementById('profileSemester');
    if (profileSemester) {
        const semester = currentUserData.semester || currentUserData.semesterName || 'Não informado';
        profileSemester.textContent = semester;
    }

    const avatarLetter = document.getElementById('avatarLetter');
    if (avatarLetter) {
        const firstLetter = (currentUserData.firstName?.[0] || currentUserData.name?.[0] || currentUserData.username?.[0] || 'U').toUpperCase();
        avatarLetter.textContent = firstLetter;
    }

    const welcomeName = document.getElementById('welcomeName');
    if (welcomeName) {
        const firstName = currentUserData.firstName || currentUserData.name?.split(' ')[0] || currentUserData.username || 'Usuário';
        welcomeName.textContent = `Bem-vindo(a), ${firstName}! 👋`;
    }

    const perfilNome = document.getElementById('perfilNome');
    if (perfilNome) perfilNome.textContent = currentUserData.firstName || 'Não informado';

    const perfilSobrenome = document.getElementById('perfilSobrenome');
    if (perfilSobrenome) perfilSobrenome.textContent = currentUserData.lastName || 'Não informado';

    const perfilEmailConfig = document.getElementById('perfilEmail');
    if (perfilEmailConfig) perfilEmailConfig.textContent = currentUserData.email || 'Não informado';

    const perfilUsuario = document.getElementById('perfilUsuario');
    if (perfilUsuario) perfilUsuario.textContent = currentUserData.username || 'Não informado';

    const perfilCurso = document.getElementById('perfilCurso');
    if (perfilCurso) perfilCurso.textContent = (currentUserData.courseName || currentUserData.course || 'Não informado').toUpperCase();

    const perfilSenha = document.getElementById('perfilSenha');
    if (perfilSenha) {
        perfilSenha.setAttribute('data-real-password', currentUserData.password || 'Sem senha definida');
    }

    const profilePassword = document.getElementById('profilePassword');
    if (profilePassword) {
        profilePassword.setAttribute('data-real-password', currentUserData.password || '');
    }

    updateProfileStats();
}

function updateProfileStats() {
    let disciplinasCount = 0;

    const courseKey = (currentUserData?.course || currentUserData?.courseName || '').toLowerCase();
    if (courseKey && typeof coursesData !== 'undefined' && coursesData[courseKey]) {
        coursesData[courseKey].forEach(period => {
            disciplinasCount += period.subjects?.length || 0;
        });
    }

    const progressoTotal = Math.floor(Math.random() * 100);

    let dias = 0;
    if (currentUserData?.createdAt) {
        const created = new Date(currentUserData.createdAt);
        const hoje = new Date();
        const diffTime = Math.abs(hoje - created);
        dias = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    } else {
        dias = Math.floor(Math.random() * 30) + 1;
    }

    const statDisciplinas = document.getElementById('statDisciplinas');
    if (statDisciplinas) statDisciplinas.textContent = disciplinasCount;

    const statProgresso = document.getElementById('statProgresso');
    if (statProgresso) statProgresso.textContent = `${progressoTotal}%`;

    const statDias = document.getElementById('statDias');
    if (statDias) statDias.textContent = dias;
}

function setupShowPassword() {
    const showPasswordBtn = document.getElementById('showPasswordBtn');
    const profilePassword = document.getElementById('profilePassword');

    if (showPasswordBtn && profilePassword) {
        let isPasswordVisible = false;

        showPasswordBtn.addEventListener('click', () => {
            const realPassword = profilePassword.getAttribute('data-real-password') || '******';
            if (!isPasswordVisible) {
                profilePassword.textContent = realPassword || 'Sem senha definida';
                showPasswordBtn.innerHTML = '🙈 Ocultar';
                isPasswordVisible = true;
            } else {
                profilePassword.textContent = '********';
                showPasswordBtn.innerHTML = '👁️ Mostrar';
                isPasswordVisible = false;
            }
        });
    }

    const btnVerSenha = document.getElementById('btnVerSenha');
    const perfilSenha = document.getElementById('perfilSenha');

    if (btnVerSenha && perfilSenha) {
        let isVisible = false;

        btnVerSenha.addEventListener('click', () => {
            const realPassword = perfilSenha.getAttribute('data-real-password') || '******';
            if (!isVisible) {
                perfilSenha.textContent = realPassword;
                btnVerSenha.innerHTML = '🙈 Ocultar';
                isVisible = true;
            } else {
                perfilSenha.textContent = '********';
                btnVerSenha.innerHTML = '👁️ Ver';
                isVisible = false;
            }
        });
    }
}

function setupEditProfile() {
    const editBtn = document.getElementById('editProfileBtn');
    const modal = document.getElementById('editProfileModal');
    const cancelBtn = document.getElementById('cancelEditProfile');
    const saveBtn = document.getElementById('saveEditProfile');

    if (!editBtn || !modal) return;

    editBtn.addEventListener('click', () => {
        document.getElementById('editFirstName').value = currentUserData?.firstName || '';
        document.getElementById('editLastName').value = currentUserData?.lastName || '';
        document.getElementById('editEmail').value = currentUserData?.email || '';
        document.getElementById('editPassword').value = '';
        document.getElementById('editConfirmPassword').value = '';
        modal.style.display = 'flex';
    });

    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            const newFirstName = document.getElementById('editFirstName').value.trim();
            const newLastName = document.getElementById('editLastName').value.trim();
            const newEmail = document.getElementById('editEmail').value.trim();
            const newPassword = document.getElementById('editPassword').value;
            const confirmPassword = document.getElementById('editConfirmPassword').value;

            if (newPassword && newPassword !== confirmPassword) {
                showToast('As senhas não coincidem!', 'error');
                return;
            }
            if (newPassword && newPassword.length < 3) {
                showToast('A senha deve ter pelo menos 3 caracteres!', 'error');
                return;
            }

            if (newFirstName) currentUserData.firstName = newFirstName;
            if (newLastName) currentUserData.lastName = newLastName;
            if (newEmail) currentUserData.email = newEmail;
            if (newPassword) currentUserData.password = newPassword;

            const storage = localStorage.getItem('currentUser') ? localStorage : sessionStorage;
            storage.setItem('currentUser', JSON.stringify(currentUserData));

            const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
            const userIndex = registeredUsers.findIndex(u => u.username === currentUserData.username);
            if (userIndex !== -1) {
                registeredUsers[userIndex] = { ...registeredUsers[userIndex], ...currentUserData };
                localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
            }

            modal.style.display = 'none';
            loadUserProfile();
            showToast('Perfil atualizado com sucesso!', 'success');
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });
}

function setupLogout() {
    const logoutBtn = document.getElementById('logoutFromProfileBtn');
    const logoutFinalBtn = document.getElementById('btnLogoutFinal');

    const handleLogout = () => {
        if (confirm('Tem certeza que deseja sair do sistema?')) {
            // ✅ Remove APENAS o usuário logado (mantém os cadastros)
            localStorage.removeItem('currentUser');
            sessionStorage.removeItem('currentUser');
            localStorage.removeItem('authToken');
            sessionStorage.removeItem('authToken');

            window.location.href = 'login.html';
        }
    };

    if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
    if (logoutFinalBtn) logoutFinalBtn.addEventListener('click', handleLogout);
}

// ==========================================
// NAVEGAÇÃO
// ==========================================
function setupNavigation() {
    const sidebarIcons = document.querySelectorAll('.sidebar-icon');
    const screens = document.querySelectorAll('.screen');

    const navBtns = {
        'btnHome': 'tela-home',
        'btnTrilhas': 'tela-trilhas',
        'btnMenu': 'tela-menu',
        'btnConfig': 'tela-config',
        'profileSettingsBtn': 'tela-perfil'
    };

    Object.keys(navBtns).forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.addEventListener('click', () => {
                screens.forEach(s => {
                    s.classList.add('hidden');
                    s.classList.remove('active-screen');
                });

                const targetScreen = document.getElementById(navBtns[btnId]);
                if (targetScreen) {
                    targetScreen.classList.remove('hidden');
                    targetScreen.classList.add('active-screen');
                }

                sidebarIcons.forEach(icon => icon.classList.remove('active'));
                if (btn.classList.contains('sidebar-icon')) {
                    btn.classList.add('active');
                }

                if (btnId === 'profileSettingsBtn') {
                    loadUserProfile();
                }
            });
        }
    });
}

// ==========================================
// AUXILIARES
// ==========================================
function showToast(message, type = 'info') {
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = `toast-notification ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.style.backgroundColor = '#0f172a';
        document.querySelectorAll('.period-column').forEach(col => col.style.backgroundColor = '#1e293b');
        document.querySelectorAll('.subject-card').forEach(card => card.style.backgroundColor = '#1e293b');
        document.querySelectorAll('.subject-card .subject-text h3').forEach(h3 => h3.style.color = '#fff');
    } else if (theme === 'blue') {
        document.body.style.backgroundColor = '#e0f2fe';
        document.querySelectorAll('.period-column').forEach(col => col.style.backgroundColor = '#38bdf8');
        document.querySelectorAll('.subject-card').forEach(card => card.style.backgroundColor = '#ffffff');
    } else {
        document.body.style.backgroundColor = '#f1f5f9';
        document.querySelectorAll('.period-column').forEach(col => col.style.backgroundColor = '#3175db');
        document.querySelectorAll('.subject-card').forEach(card => card.style.backgroundColor = '#ffffff');
    }
}

function applyFontSize(size) {
    let fontSize = '14px';
    if (size === 'small') fontSize = '12px';
    else if (size === 'large') fontSize = '16px';
    document.body.style.fontSize = fontSize;
}

// ==========================================
// PAINEL DE CONFIGURAÇÕES
// ==========================================
function initSettingsPanel() {
    console.log('🔧 Inicializando engrenagem superior...');

    let overlay = document.getElementById('settingsOverlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'overlay-settings';
        overlay.id = 'settingsOverlay';
        document.body.appendChild(overlay);
    }

    let panel = document.getElementById('quickSettingsPanel');
    if (!panel) {
        panel = document.createElement('div');
        panel.className = 'quick-settings-panel';
        panel.id = 'quickSettingsPanel';
        panel.innerHTML = `
            <div class="quick-settings-header">
                <h3>⚙️ Configurações Rápidas</h3>
                <button class="close-settings" id="closeSettingsBtn">✕</button>
            </div>
            <div class="quick-settings-body">
                <div class="settings-option">
                    <label>🎨 Tema da Interface</label>
                    <div class="theme-option">
                        <button class="theme-btn" data-theme="light">☀️ Claro</button>
                        <button class="theme-btn" data-theme="dark">🌙 Escuro</button>
                        <button class="theme-btn" data-theme="blue">💙 Azul</button>
                    </div>
                </div>
                <div class="settings-option">
                    <label>📏 Tamanho da Fonte</label>
                    <select id="fontSizeSelect">
                        <option value="small">🔤 Pequeno</option>
                        <option value="medium" selected>🔤 Médio</option>
                        <option value="large">🔤 Grande</option>
                    </select>
                </div>
                <div class="settings-option">
                    <label>🎓 Gerenciar Cursos</label>
                    <button id="manageCoursesBtn" style="background: linear-gradient(135deg, #f59e0b, #d97706); width:100%; padding:12px; border:none; border-radius:12px; color:white; cursor:pointer;">➕ Adicionar Novo Curso</button>
                    <div id="coursesList" style="margin-top: 12px; max-height: 200px; overflow-y: auto; border-radius: 12px; border: 1px solid #e2e8f0;"></div>
                </div>
                <div class="settings-option">
                    <label>🔄 Sincronizar Dados</label>
                    <button id="refreshDataBtn" style="width:100%; padding:12px; background:#3175db; color:white; border:none; border-radius:12px; cursor:pointer;">🔄 Sincronizar Agora</button>
                </div>
                <div class="settings-option">
                    <label>📊 Estatísticas do Sistema</label>
                    <div class="stats-box" style="background:#f8fafc; padding:16px; border-radius:16px;">
                        <p>📚 Total de Cursos: <span id="statsTotalCursos">0</span></p>
                        <p>📖 Total de Disciplinas: <span id="statsTotalDisciplinas">0</span></p>
                        <p>👥 Usuários Cadastrados: <span id="statsTotalUsuarios">0</span></p>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(panel);
    }

    function updateCoursesList() {
        const coursesListDiv = document.getElementById('coursesList');
        if (!coursesListDiv || typeof coursesData === 'undefined') return;

        const courseKeys = Object.keys(coursesData);
        if (courseKeys.length === 0) {
            coursesListDiv.innerHTML = '<p style="padding: 12px; color: #666; text-align: center;">Nenhum curso cadastrado</p>';
            return;
        }

        coursesListDiv.innerHTML = courseKeys.map(key => `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 12px; border-bottom: 1px solid #e2e8f0;">
                <span style="font-weight: 500; text-transform: capitalize;">🎓 ${key}</span>
                <div>
                    <button class="edit-course-btn" data-course="${key}" style="background: #3175db; color: white; border: none; border-radius: 6px; padding: 4px 10px; margin-right: 5px; cursor: pointer;">✏️ Editar</button>
                    <button class="delete-course-btn" data-course="${key}" style="background: #ef4444; color: white; border: none; border-radius: 6px; padding: 4px 10px; cursor: pointer;">🗑️</button>
                </div>
            </div>
        `).join('');

        document.querySelectorAll('.edit-course-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const courseKey = btn.getAttribute('data-course');
                openEditCourseModal(courseKey);
            });
        });

        document.querySelectorAll('.delete-course-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const courseKey = btn.getAttribute('data-course');
                if (confirm(`Tem certeza que deseja excluir o curso "${courseKey}"?`)) {
                    delete coursesData[courseKey];
                    updateCoursesList();
                    updateStats();
                    updateCourseSelect();
                    showToast(`Curso "${courseKey}" removido!`, 'success');
                }
            });
        });
    }

    function openAddCourseModal() {
        const modalOverlay = document.createElement('div');
        modalOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.6);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
        `;

        modalOverlay.innerHTML = `
            <div style="background: white; border-radius: 24px; width: 500px; max-width: 90%; padding: 24px;">
                <h2 style="color: #3175db;">➕ Adicionar Novo Curso</h2>
                <div class="form-group"><label>Nome do Curso:</label><input type="text" id="newCourseName" placeholder="Ex: Medicina" style="width:100%; padding:10px; border-radius:8px;"></div>
                <div class="form-group"><label>Chave do Curso:</label><input type="text" id="newCourseKey" placeholder="Ex: medicina" style="width:100%; padding:10px; border-radius:8px;"><small style="color:#666;">Identificador único</small></div>
                <div class="form-group"><label>Quantidade de Períodos:</label><input type="number" id="newCoursePeriods" min="1" max="10" value="3" style="width:100%; padding:10px; border-radius:8px;"></div>
                <div style="display: flex; gap: 12px; margin-top: 20px;">
                    <button id="cancelAddCourse" style="flex:1; padding:10px; background:#ccc; border:none; border-radius:8px;">Cancelar</button>
                    <button id="confirmAddCourse" style="flex:1; padding:10px; background:#4CAF50; color:white; border:none; border-radius:8px;">Adicionar</button>
                </div>
            </div>
        `;
        document.body.appendChild(modalOverlay);

        document.getElementById('cancelAddCourse').onclick = () => modalOverlay.remove();
        document.getElementById('confirmAddCourse').onclick = () => {
            const courseName = document.getElementById('newCourseName').value.trim();
            let courseKey = document.getElementById('newCourseKey').value.trim().toLowerCase();
            const numPeriods = parseInt(document.getElementById('newCoursePeriods').value);
            if (!courseName) { showToast('Digite o nome do curso!', 'error'); return; }
            if (!courseKey) courseKey = courseName.toLowerCase().replace(/[^a-z]/g, '');
            if (coursesData[courseKey]) { showToast('Curso já existe!', 'error'); return; }

            const newCourse = [];
            for (let i = 1; i <= numPeriods; i++) {
                newCourse.push({ period: `${i}º Período`, desc: `Disciplinas do ${i}º período`, subjects: [] });
            }
            coursesData[courseKey] = newCourse;
            updateCoursesList();
            updateStats();
            updateCourseSelect();
            modalOverlay.remove();
            showToast(`Curso "${courseName}" adicionado!`, 'success');
        };
    }

    function updateStats() {
        if (typeof coursesData === 'undefined') return;
        const totalCursos = Object.keys(coursesData).length;
        let totalDisciplinas = 0;
        for (let course in coursesData) {
            coursesData[course].forEach(period => { totalDisciplinas += period.subjects?.length || 0; });
        }
        const totalUsuarios = JSON.parse(localStorage.getItem('registeredUsers') || '[]').length;
        const statsCursos = document.getElementById('statsTotalCursos');
        const statsDisciplinas = document.getElementById('statsTotalDisciplinas');
        const statsUsuarios = document.getElementById('statsTotalUsuarios');
        if (statsCursos) statsCursos.textContent = totalCursos;
        if (statsDisciplinas) statsDisciplinas.textContent = totalDisciplinas;
        if (statsUsuarios) statsUsuarios.textContent = totalUsuarios;
    }

    function updateCourseSelect() {
        const courseSelect = document.getElementById('courseSelect');
        if (courseSelect && typeof coursesData !== 'undefined') {
            const currentValue = courseSelect.value;
            const courseKeys = Object.keys(coursesData);
            courseSelect.innerHTML = courseKeys.map(key => `<option value="${key}">${key.toUpperCase()}</option>`).join('');
            if (courseKeys.includes(currentValue)) courseSelect.value = currentValue;
            else if (courseKeys.length > 0 && typeof renderCurriculum === 'function') renderCurriculum(courseKeys[0]);
        }
    }

    function openPanel() {
        panel.classList.add('open');
        overlay.classList.add('show');
        updateStats();
        updateCoursesList();
    }

    function closePanel() {
        panel.classList.remove('open');
        overlay.classList.remove('show');
    }

    document.getElementById('closeSettingsBtn')?.addEventListener('click', closePanel);
    overlay.addEventListener('click', closePanel);

    const topSettingsBtn = document.getElementById('topSettingsBtn');
    if (topSettingsBtn) topSettingsBtn.addEventListener('click', (e) => { e.preventDefault(); openPanel(); });

    document.getElementById('manageCoursesBtn')?.addEventListener('click', () => { closePanel(); setTimeout(openAddCourseModal, 300); });
    document.getElementById('refreshDataBtn')?.addEventListener('click', () => {
        showToast('🔄 Dados sincronizados!', 'success');
        const c = document.getElementById('courseSelect')?.value;
        if (c && typeof renderCurriculum === 'function') renderCurriculum(c);
        updateStats();
    });

    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.getAttribute('data-theme');
            document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyTheme(theme);
            localStorage.setItem('userTheme', theme);
            showToast(`Tema: ${theme}`, 'success');
        });
    });

    const fontSizeSelect = document.getElementById('fontSizeSelect');
    if (fontSizeSelect) {
        fontSizeSelect.addEventListener('change', (e) => { applyFontSize(e.target.value); localStorage.setItem('fontSize', e.target.value); });
        const savedFontSize = localStorage.getItem('fontSize') || 'medium';
        fontSizeSelect.value = savedFontSize;
        applyFontSize(savedFontSize);
    }

    const savedTheme = localStorage.getItem('userTheme') || 'light';
    const themeBtn = document.querySelector(`.theme-btn[data-theme="${savedTheme}"]`);
    if (themeBtn) themeBtn.click();

    updateCoursesList();
    updateStats();
}

// ==========================================
// EDITAR CURSO E PERÍODO
// ==========================================
function openEditCourseModal(courseKey) {
    const course = coursesData[courseKey];
    if (!course) return;
    alert('Funcionalidade de edição de curso em desenvolvimento!');
}

function openEditPeriodModal(courseKey, periodIndex) {
    const period = coursesData[courseKey][periodIndex];

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="modal-box">
            <h2>⚙️ Editar Período: ${period.period}</h2>
            <div class="form-group"><label>Nome do Período:</label><input type="text" id="editPeriodName" value="${period.period}" style="width:100%; padding:10px; border-radius:8px;"></div>
            <div class="form-group"><label>Descrição:</label><input type="text" id="editPeriodDesc" value="${period.desc}" style="width:100%; padding:10px; border-radius:8px;"></div>
            <div class="form-group"><label>Disciplinas:</label><div id="subjectsList" style="max-height:200px; overflow-y:auto; margin-bottom:10px;">${period.subjects.map((sub, idx) => `<div style="display:flex; justify-content:space-between; padding:8px; border-bottom:1px solid #eee;"><span>${sub.icon} ${sub.name} (${sub.hours})</span><button class="btn-delete-subject" data-subject-index="${idx}" style="background:#ef4444; color:white; border:none; border-radius:6px; padding:4px 10px;">🗑️</button></div>`).join('')}</div><button id="addSubjectBtn" style="width:100%; background:#3175db; color:white; border:none; border-radius:8px; padding:10px;">+ Adicionar Disciplina</button></div>
            <div class="modal-buttons" style="display:flex; gap:10px; margin-top:20px;"><button id="closeModalBtn" style="flex:1; padding:10px; background:#ccc; border:none; border-radius:8px;">Cancelar</button><button id="savePeriodBtn" style="flex:1; padding:10px; background:#4CAF50; color:white; border:none; border-radius:8px;">Salvar</button></div>
        </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('closeModalBtn').onclick = () => modal.remove();
    document.getElementById('savePeriodBtn').onclick = () => {
        coursesData[courseKey][periodIndex].period = document.getElementById('editPeriodName').value;
        coursesData[courseKey][periodIndex].desc = document.getElementById('editPeriodDesc').value;
        modal.remove();
        renderCurriculum(courseKey);
        showToast('Período atualizado!', 'success');
    };

    document.getElementById('addSubjectBtn').onclick = () => {
        const name = prompt('Nome da disciplina:');
        if (name) {
            const icon = prompt('Emoji:', '📚');
            const hours = prompt('Carga horária:', '60h');
            coursesData[courseKey][periodIndex].subjects.push({ id: `new_${Date.now()}`, icon: icon || '📚', name: name, hours: hours || '60h', trilha: [] });
            modal.remove();
            renderCurriculum(courseKey);
            showToast(`Disciplina "${name}" adicionada!`, 'success');
        }
    };

    document.querySelectorAll('.btn-delete-subject').forEach(btn => {
        btn.onclick = () => {
            const idx = parseInt(btn.getAttribute('data-subject-index'));
            if (confirm('Remover esta disciplina?')) {
                coursesData[courseKey][periodIndex].subjects.splice(idx, 1);
                modal.remove();
                renderCurriculum(courseKey);
                showToast('Disciplina removida!', 'success');
            }
        };
    });
}

// ==========================================
// APIs (Google Books, IA, Agenda)
// ==========================================
window.carregarLivrosDoCurso = async function (nomeCurso) {
    const container = document.getElementById('booksContainer');
    if (!container) return;

    const termoLimpo = (nomeCurso || 'Biomedicina').split('-')[0].trim();

    const livrosReserva = [
        { titulo: `Guia Prático de ${termoLimpo}`, capa: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=200&q=80', link: 'https://books.google.com' },
        { titulo: `Fundamentos de ${termoLimpo}`, capa: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&q=80', link: 'https://books.google.com' },
        { titulo: `Manual de Estudos: ${termoLimpo}`, capa: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=200&q=80', link: 'https://books.google.com' },
        { titulo: `Tópicos Avançados em ${termoLimpo}`, capa: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=200&q=80', link: 'https://books.google.com' }
    ];

    function renderizar(lista) {
        container.style.display = 'grid';
        container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(130px, 1fr))';
        container.style.gap = '15px';
        container.innerHTML = lista.map(item => `
            <a href="${item.link}" target="_blank" style="text-decoration: none; color: #333; text-align: center; display: block; background: #fff; padding: 10px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                <img src="${item.capa}" alt="${item.titulo}" style="width: 100%; height: 140px; object-fit: cover; border-radius: 6px;">
                <p style="font-size: 0.8rem; font-weight: 600; margin-top: 8px; height: 2.4em; overflow: hidden; line-height: 1.2;">${item.titulo}</p>
            </a>
        `).join('');
    }

    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(termoLimpo)}&maxResults=4&langRestrict=pt`);
        if (!response.ok) throw new Error('API Rate Limit');

        const data = await response.json();
        if (data.items && data.items.length > 0) {
            const apiBooks = data.items.map(item => ({
                titulo: item.volumeInfo.title,
                capa: item.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x193?text=Sem+Capa',
                link: item.volumeInfo.infoLink
            }));
            renderizar(apiBooks);
        } else {
            renderizar(livrosReserva);
        }
    } catch (err) {
        renderizar(livrosReserva);
    }
};

window.perguntarIA = async function () {
    const input = document.getElementById('aiInput');
    const output = document.getElementById('chatOutput');
    if (!input || !output) return;

    const pergunta = input.value.trim();
    if (!pergunta) return;

    output.innerHTML = '🤖 <em>O Tutor IA está analisando sua dúvida...</em>';
    input.value = '';

    const GEMINI_API_KEY = "SUA_CHAVE_GEMINI_AQUI";

    if (GEMINI_API_KEY && GEMINI_API_KEY !== "SUA_CHAVE_GEMINI_AQUI") {
        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: `Você é um tutor acadêmico para estudantes universitários. Responda de forma didática e objetiva à seguinte dúvida: ${pergunta}` }] }]
                })
            });
            const data = await response.json();
            const respostaIA = data.candidates[0]?.content?.parts[0]?.text || "Não foi possível obter resposta.";
            output.innerHTML = `<strong>Tutor IA:</strong> ${respostaIA.replace(/\n/g, '<br>')}`;
        } catch (err) {
            output.innerHTML = '⚠️ Erro ao consultar a IA. Verifique sua chave API.';
        }
    } else {
        setTimeout(() => {
            output.innerHTML = `<strong>Tutor IA:</strong> Sobre "<em>${pergunta}</em>": Esta é uma excelente dúvida! Recomendamos verificar a bibliografia recomendada abaixo para se aprofundar.`;
        }, 800);
    }
};

window.adicionarAoGoogleAgenda = function (titulo, descricao, dataInicio, dataFim) {
    const inicio = new Date(dataInicio).toISOString().replace(/-|:|\.\d\d\d/g, '');
    const fim = new Date(dataFim).toISOString().replace(/-|:|\.\d\d\d/g, '');

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(titulo)}&details=${encodeURIComponent(descricao)}&dates=${inicio}/${fim}`;

    window.open(googleCalendarUrl, '_blank');
};

// ==========================================
// FUNÇÕES GLOBAIS DE TRILHAS
// ==========================================
window.toggleTrilha = function (headerElement) {
    const card = headerElement.parentElement;
    card.classList.toggle('active');
};

window.toggleSubModulo = function (subHeaderElement, event) {
    if (event) event.stopPropagation();
    const subModulo = subHeaderElement.parentElement;
    subModulo.classList.toggle('active');
};

// ==========================================
// INICIALIZAÇÃO ÚNICA
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Inicializando sistema...');

    // 1. Verificação flexível de autenticação
    let rawUser = localStorage.getItem('currentUser') ||
        sessionStorage.getItem('currentUser') ||
        localStorage.getItem('usuario') ||
        localStorage.getItem('user') ||
        localStorage.getItem('usuarioLogado');

    let isUserLoggedIn = false;

    if (rawUser && rawUser !== "null" && rawUser !== "undefined" && rawUser !== "") {
        try {
            const parsed = JSON.parse(rawUser);
            if (parsed && (typeof parsed === 'object' || typeof parsed === 'string')) {
                isUserLoggedIn = true;
            }
        } catch (e) {
            if (typeof rawUser === 'string' && rawUser.length > 0) {
                isUserLoggedIn = true;
            }
        }
    }

    const isLoginPage = window.location.pathname.endsWith('login.html');

    if (!isUserLoggedIn && !isLoginPage) {
        console.warn('⚠️ Nenhum usuário logado encontrado. Redirecionando para login.html...');
        window.location.href = 'login.html';
        return;
    }

    // 2. Carrega perfil e configura a UI
    loadUserProfile();
    setupNavigation();
    setupShowPassword();
    setupEditProfile();
    setupLogout();
    initSettingsPanel();

    // 3. Renderiza curso do usuário
    const rawCourse = currentUserData?.course || currentUserData?.courseName || 'biomedicina';
    const courseKey = rawCourse.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, '');

    if (typeof renderCurriculum === 'function') {
        renderCurriculum(coursesData[courseKey] ? courseKey : 'biomedicina');
    }
    if (typeof window.carregarLivrosDoCurso === 'function') {
        window.carregarLivrosDoCurso(rawCourse);
    }

    // 4. Seletor de cursos
    const courseSelect = document.getElementById('courseSelect');
    if (courseSelect && typeof coursesData !== 'undefined') {
        const courseKeys = Object.keys(coursesData);
        courseSelect.innerHTML = courseKeys.map(key => `<option value="${key}">${key.toUpperCase()}</option>`).join('');
        if (coursesData[courseKey]) courseSelect.value = courseKey;

        courseSelect.addEventListener('change', (e) => {
            const selectedCourse = e.target.value;
            if (typeof renderCurriculum === 'function') renderCurriculum(selectedCourse);
            if (typeof window.carregarLivrosDoCurso === 'function') window.carregarLivrosDoCurso(selectedCourse);
        });
    }

    // 5. Busca de disciplinas
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            document.querySelectorAll('.subject-card').forEach(card => {
                const title = card.querySelector('.subject-text h3')?.textContent.toLowerCase() || '';
                card.style.display = title.includes(term) ? 'block' : 'none';
            });
        });
    }

    // 6. Tema e fonte salvos
    const savedTheme = localStorage.getItem('userTheme') || 'light';
    applyTheme(savedTheme);
    const savedFontSize = localStorage.getItem('fontSize') || 'medium';
    applyFontSize(savedFontSize);

    console.log('✅ Sistema inicializado com sucesso!');
});