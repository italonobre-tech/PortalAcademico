// ==========================================
// COURSES-DATA.JS - LISTA DE CURSOS COMPARTILHADA
// ==========================================
const coursesData = {
    biomedicina: [
        {
            period: "1º Período: Fundamentos", desc: "Bases biológicas", subjects: [
                {
                    id: "bio1", icon: "🦴", name: "Anatomia Humana", hours: "225h", trilha: [
                        { tipo: "base", titulo: "Fisiologia", desc: `<strong>Biologia 2º ano</strong><br>• Sistema Nervoso<br>• Sistema Hormonal<br><br><strong>Biologia 3º ano</strong><br>• Imunologia<br>• Relação entre Sistema<br>• Corpo Humano<br><br><strong>Química 2º ano</strong><br>• Química orgânica<br>• Funções orgânicas<br>• Bioquímica Básica<br>` },
                        { tipo: "base", titulo: "Citologia e Histologia", desc: `<strong>Biologia 1º ano</strong><br>• Bioquímica Celular<br>• Membrana Plasmática<br>• Organelas Citoplasmáticas<br>• Núcleo e Divisão Celular<br><br><strong>Biologia 2º ano</strong><br>• Tecido Epitelial<br>• Tecido Conjuntivo<br>• Tecido Muscular<br>• Tecido Nervoso<br><br><strong>Biologia 3º ano</strong><br>• Genética<br>• Embriologia<br>• Evolução<br>` },
                        { tipo: "faculdade", titulo: "Osteologia", desc: `<strong>Biologia 1º Período</strong><br>• Funções do Esqueleto<br>• Classificação dos Ossos<br>• Estrutura Óssea<br>• Esqueleto Axial<br>• Esqueleto Apendicular<br>` },
                        { tipo: "faculdade", titulo: "Miologia", desc: `<strong>Biologia 1º Período</strong><br>• Componentes Anatômicos<br>• Classificação dos Músculos<br>• Músculos da Cabeça e Pescoço<br>• Músculos do Tronco<br>• Manguito Rotador<br>` }
                    ]
                },
                {
                    id: "bio2", icon: "🧫", name: "Citologia e Histologia", hours: "225h", trilha: [
                        { tipo: "base", titulo: "Citologia", desc: `<strong>Biologia 1º ano</strong><br>• Composição Química<br>• Membrana Plasmática<br>• Organelas<br>• Núcleo e DNA<br>• Divisão Celular<br>` },
                        { tipo: "base", titulo: "Histologia", desc: `<strong>Biologia 2º ano</strong><br>• Tecido Epitelial<br>• Tecido Conjuntivo<br>• Tecido Muscular<br>• Tecido Nervoso<br>` },
                        { tipo: "faculdade", titulo: "Citologia", desc: `<strong>Biologia 1º Período</strong><br>• Biomembranas<br>• Citoesqueleto<br>• Tráfego de Vesículas<br>• Sinalização Celular<br>• Ciclo Celular e Apoptose<br>` },
                        { tipo: "faculdade", titulo: "Histologia", desc: `<strong>Biologia 2º Período</strong><br>• Tecido Epitelial<br>• Tecido Conjuntivo<br>• Tecido Muscular<br>• Tecido Nervoso<br>` }
                    ]
                }
            ]
        },
        {
            period: "2º Período: Ciclo Biológico", desc: "Funcionamento orgânico", subjects: [
                {
                    id: "bio3", icon: "🫀", name: "Fisiologia Humana", hours: "270h", trilha: [
                        { tipo: "base", titulo: "Sistema Digestório", desc: `<strong>Biologia 2º ano</strong><br>• Órgãos e Enzimas<br>• Glândulas Anexas<br>` },
                        { tipo: "base", titulo: "Sistema Endócrino", desc: `<strong>Biologia 2º ano</strong><br>• Pâncreas<br>• Tireoide<br>• Suprarrenais<br>• Hipófise<br>` },
                        { tipo: "base", titulo: "Sistema Cardiovascular", desc: `<strong>Biologia 2º ano</strong><br>• Coração<br>• Grande e Pequena Circulação<br>• Vasos<br>` },
                        { tipo: "base", titulo: "Sistema Respiratório", desc: `<strong>Biologia 2º ano</strong><br>• Hematose<br>• Transporte de Gases<br>• Mecânica Respiratória<br>• Controle do pH Sanguíneo<br>` },
                        { tipo: "base", titulo: "Sistema Excretor", desc: `<strong>Biologia 2º ano</strong><br>• Néfron<br>• Hormônio ADH<br>• Excreção de Nitrogênio<br>` },
                        { tipo: "base", titulo: "Sistema Nervoso", desc: `<strong>Biologia 2º ano</strong><br>• Neurônio<br>• Sinapse<br>• Divisão<br>• Ato Reflexo<br>` },
                        { tipo: "faculdade", titulo: "Fisiologia Renal", desc: `<strong>Fisiologia I 2º Período</strong><br>• Mecanismo de Contracorrente<br>• Sistema Renina-Angiotensina-Aldosterona<br>• Clareamento<br>• Regulação do pH<br>` },
                        { tipo: "faculdade", titulo: "Neurofisiologia", desc: `<strong>Fisiologia II 3º Período</strong><br>• Potencial de Repouso e Ação<br>• Sinapses Químicas<br>• Sistema Nervoso Autônomo<br>` }
                    ]
                },
                {
                    id: "bio4", icon: "🦠", name: "Microbiologia", hours: "270h", trilha: [
                        { tipo: "base", titulo: "Reino Monera", desc: `<strong>Biologia 2º ano</strong><br>• Estrutura Celular<br>• Formas<br>• Reprodução e Variabilidade<br>• Importância Ecológica<br>• Bacterioses<br>` },
                        { tipo: "base", titulo: "Virologia", desc: `<strong>Biologia 2º ano</strong><br>• Características Gerais<br>• Estrutura<br>• Ciclos Reprodutivos<br>• Retrovírus<br>• Viroses<br>` },
                        { tipo: "faculdade", titulo: "Genética Bacteriana e Resistência", desc: `<strong>Microbiologia Geral 2º periodo</strong><br>• Plasmídeos<br>• Transferência Horizontal de Genes<br>• Mecanismos de Resistência<br>` },
                        { tipo: "faculdade", titulo: "Curva de Crescimento Microbiano", desc: `<strong>Microbiologia Médica 4º periodo</strong><br>• Fases do Crescimento<br>• Meios de Cultura<br>• Controle Microbiano<br>` }
                    ]
                }
            ]
        },
        {
            period: "3º Período: Genética e Defesa", desc: "DNA e Imunidade", subjects: [
                {
                    id: "bio5", icon: "🧬", name: "Genética Humana", hours: "240h", trilha: [
                        { tipo: "base", titulo: "Sistema ABO e Fator Rh", desc: `<strong>Biologia 3º ano</strong><br>• Codominância<br>• Relação de Dominância<br>• Transfusões Sanguíneas<br>• Eritroblastose Fetal<br>` },
                        { tipo: "base", titulo: "Herança Ligada ao Sexo", desc: `<strong>Biologia 3º ano</strong><br>• Herança Recessiva Ligada ao X<br>• Herança Restrita ao Sexo<br>• Herança Influenciada pelo Sexo<br>` },
                        { tipo: "faculdade", titulo: "Epigenética", desc: `<strong>Genética Médica 3º periodo</strong><br>• Metilação do DNA<br>• Modificações de Histonas<br>• RNAs não-codificantes<br>• Influência Ambiental<br>` }
                    ]
                },
                {
                    id: "bio6", icon: "🛡️", name: "Imunologia Básica", hours: "240h", trilha: [
                        { tipo: "base", titulo: "Imunização Ativa", desc: `<strong>Biologia 2º ano</strong><br>• Imunização Ativa Natural<br>• Imunização Ativa Artificial<br>• Células de Memória<br>` },
                        { tipo: "faculdade", titulo: "Estrutura e Genética do MHC", desc: `<strong>Imunologia Celular 3º periodo</strong><br>• MHC de Classe I<br>• MHC de Classe II<br>• Polimorfismo e Poligenia<br>` }
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
                        { tipo: "base", titulo: "Funções", desc: `<strong>Matemática 1º ano</strong><br>• Função Afim<br>• Função Quadrática<br>• Função Exponencial<br>• Função Logarítmica<br>• Funções Compostas e Inversas<br>` },
                        { tipo: "base", titulo: "Trigonometria", desc: `<strong>Matemática 2º ano</strong><br>• Triângulo Retângulo<br>• Ciclo Trigonométrico<br>• Sinais nos Quadrantes<br>• Identidades Trigonométricas<br>` },
                        { tipo: "faculdade", titulo: "Limites", desc: `<strong>Cálculo I 1º periodo</strong><br>• Definição Formal<br>• Limites Laterais<br>• Propriedades<br>• Indeterminações<br>• Limites Fundamentais<br>• Continuidade<br>` },
                        { tipo: "faculdade", titulo: "Derivadas", desc: `<strong>Cálculo I 1º periodo</strong><br>• Definição por Limite<br>• Regras de Derivação<br>• Regra da Cadeia<br>• Derivação Implícita<br>• Regra de L'Hôpital<br>` }
                    ]
                },
                {
                    id: "civ2", icon: "⚙️", name: "Física Geral I", hours: "225h", trilha: [
                        { tipo: "base", titulo: "Dinâmica", desc: `<strong>Física 1º ano</strong><br>• As Três Leis de Newton<br>• Tipos de Forças<br>• Trabalho e Energia<br>• Impulso e Quantidade de Movimento<br>` },
                        { tipo: "faculdade", titulo: "Dinâmica do Corpo Rígido", desc: `<strong>Mecânica Clássica 1º periodo</strong><br>• Cinemática Rotacional<br>• Torque<br>• Momento de Inércia<br>• Rolamento<br>• Momento Angular<br>` }
                    ]
                }
            ]
        },
        {
            period: "2º Período: Avançando nas Exatas", desc: "Mais Cálculos", subjects: [
                {
                    id: "civ3", icon: "📈", name: "Cálculo Integral II", hours: "225h", trilha: [
                        { tipo: "base", titulo: "Geometria Espacial", desc: `<strong>Matemática 2º ano</strong><br>• Geometria de Posição<br>• Poliedros e Relação de Euler<br>• Prismas<br>• Pirâmides<br>• Corpos Redondos<br>` },
                        { tipo: "faculdade", titulo: "Integrais Múltiplas", desc: `<strong>Cálculo Vetorial 2º periodo</strong><br>• Integrais Duplas<br>• Integrais Triplas<br>• Mudança de Variáveis<br>• O Jacobiano<br>` }
                    ]
                },
                {
                    id: "civ4", icon: "🌡️", name: "Física Geral II", hours: "225h", trilha: [
                        { tipo: "base", titulo: "Termologia", desc: `<strong>Física 2º ano</strong><br>• Temperatura e Calor<br>• Escalas Termométricas<br>• Dilatação Térmica<br>• Calorimetria<br>• Gases Ideais<br>` },
                        { tipo: "faculdade", titulo: "Termodinâmica", desc: `<strong>Termodinâmica 3º periodo</strong><br>• A Lei Zero<br>• Primeira Lei<br>• Teoria Cinética<br>• Máquinas Térmicas<br>• Segunda Lei<br>• Ciclo de Carnot<br>• Entropia<br>` }
                    ]
                }
            ]
        },
        {
            period: "3º Período: Engenharia Aplicada", desc: "Entrando na Profissão", subjects: [
                {
                    id: "civ5", icon: "🏗️", name: "Resistência dos Materiais", hours: "270h", trilha: [
                        { tipo: "base", titulo: "Força Elástica", desc: `<strong>Física 1º ano</strong><br>• Lei de Hooke<br>• Constante Elástica<br>• Associação de Molas<br>• Energia Potencial Elástica<br>` },
                        { tipo: "faculdade", titulo: "Tensão", desc: `<strong>Mecânica dos Sólidos 3º periodo</strong><br>• Tensão Normal<br>• Tensão de Cisalhamento<br>• Diagrama Tensão-Deformação<br>• Coeficiente de Poisson<br>` },
                        { tipo: "faculdade", titulo: "Diagramas de Esforços", desc: `<strong>Mecânica dos Sólidos 4º periodo</strong><br>• Tipos de Apoios<br>• Reações de Apoio<br>• Esforço Cortante<br>• Momento Fletor<br>` }
                    ]
                },
                {
                    id: "civ6", icon: "🖥️", name: "Desenho Técnico", hours: "240h", trilha: [
                        { tipo: "base", titulo: "Projeções Ortogonais", desc: `<strong>Matemática 2º ano</strong><br>• Método de Monge<br>• Os Diedros<br>• Seis Vistas Principais<br>• Perspectiva Isométrica<br>` },
                        { tipo: "faculdade", titulo: "Cortes", desc: `<strong>Expressão Gráfica 1º periodo</strong><br>• Planos de Corte<br>• Hachuras<br>• Corte Total<br>• Meio-Corte<br>• Seções<br>` }
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
                        { tipo: "base", titulo: "Juros Compostos", desc: `<strong>Matemática 1º ano</strong><br>• Juros Simples vs Compostos<br>• Fórmula do Montante<br>• Taxas Equivalentes<br>• Inflação e Taxa Real<br>` },
                        { tipo: "base", titulo: "Progressão Geométrica", desc: `<strong>Matemática 1º ano</strong><br>• Definição e Razão<br>• Termo Geral<br>• Soma dos Termos<br>• Interpolação Geométrica<br>` },
                        { tipo: "faculdade", titulo: "Análise de Investimentos", desc: `<strong>Administração Financeira 3º periodo</strong><br>• Valor do Dinheiro no Tempo<br>• Fluxo de Caixa<br>• Payback<br>• VPL<br>• TIR<br>` }
                    ]
                },
                {
                    id: "cont2", icon: "📘", name: "Contabilidade Introdutória", hours: "225h", trilha: [
                        { tipo: "base", titulo: "Orçamento Pessoal", desc: `<strong>Educação Financeira 1º ano</strong><br>• Mapeamento de Receitas<br>• Classificação de Despesas<br>• Regra 50-30-20<br>• Reserva de Emergência<br>` },
                        { tipo: "faculdade", titulo: "Balanço Patrimonial", desc: `<strong>Contabilidade Geral 2º periodo</strong><br>• Equação Patrimonial<br>• Ativos<br>• Passivos<br>• Patrimônio Líquido<br>• Partidas Dobradas<br>` }
                    ]
                }
            ]
        },
        {
            period: "2º Período: Intermediário", desc: "Aprofundando os registros", subjects: [
                {
                    id: "cont3", icon: "📊", name: "Contabilidade Intermediária", hours: "270h", trilha: [
                        { tipo: "base", titulo: "Interpretação de Texto", desc: `<strong>Português 2º e 3º ano</strong><br>• Leitura Crítica<br>• Análise de Textos Técnicos<br>• Coesão<br>` },
                        { tipo: "faculdade", titulo: "DRE", desc: `<strong>Contabilidade Intermediária 3º Período</strong><br>• Receitas Operacionais<br>• CMV<br>• Despesas<br>• Lucro Líquido<br>` },
                        { tipo: "faculdade", titulo: "Fluxo de Caixa", desc: `<strong>Contabilidade Intermediária 4º Período</strong><br>• Atividades Operacionais<br>• Investimento<br>• Financiamento<br>• Método Direto e Indireto<br>` }
                    ]
                },
                {
                    id: "cont4", icon: "⚖️", name: "Direito Empresarial", hours: "240h", trilha: [
                        { tipo: "base", titulo: "Cidadania e Direitos", desc: `<strong>Sociologia 1º e 2º ano</strong><br>• Direitos do Cidadão<br>• Contratos<br>• Código de Defesa do Consumidor<br>` },
                        { tipo: "faculdade", titulo: "Tipos de Sociedade", desc: `<strong>Direito Empresarial 3º Período</strong><br>• LTDA<br>• S.A.<br>• MEI<br>• Contrato Social<br>• Falência<br>` }
                    ]
                }
            ]
        },
        {
            period: "3º Período: Tributos e Custos", desc: "A Realidade do Mercado", subjects: [
                {
                    id: "cont5", icon: "🏛️", name: "Legislação Tributária", hours: "270h", trilha: [
                        { tipo: "base", titulo: "O que são Impostos?", desc: `<strong>Sociologia e Geografia 3º ano</strong><br>• Papel do Estado<br>• Retorno Social<br>• Carga Tributária<br>• Sonegação vs Elisão<br>` },
                        { tipo: "faculdade", titulo: "Impostos Diretos e Indiretos", desc: `<strong>Direito Tributário 4º Período</strong><br>• Simples Nacional<br>• Lucro Presumido e Real<br>• PIS, COFINS, IRPJ<br>• ICMS, ISS<br>` }
                    ]
                },
                {
                    id: "cont6", icon: "💰", name: "Contabilidade de Custos", hours: "240h", trilha: [
                        { tipo: "base", titulo: "Operações Matemáticas", desc: `<strong>Matemática 1º e 2º ano</strong><br>• Operações Fundamentais<br>• Regra de Três<br>• Porcentagem<br>` },
                        { tipo: "faculdade", titulo: "Custeio", desc: `<strong>Contabilidade de Custos 5º Período</strong><br>• Custos vs Despesas<br>• Custos Diretos e Indiretos<br>• Rateio de CIF<br>• Margem de Contribuição<br>• Ponto de Equilíbrio<br>` }
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
                        { tipo: "base", titulo: "Capitalismo e Burocracia", desc: `<strong>História 2º e 3º ano</strong><br>• Revoluções Industriais<br>• Fordismo, Toyotismo<br>• Crise de 1929<br><br><strong>Sociologia 2º ano</strong><br>• Max Weber<br>• Karl Marx<br>• Hierarquia<br>` },
                        { tipo: "faculdade", titulo: "Escolas Administrativas", desc: `<strong>TGA 1º Período</strong><br>• Taylor<br>• Fayol<br>• Elton Mayo<br>• Teoria Sistêmica<br>` },
                        { tipo: "faculdade", titulo: "Processo Organizacional", desc: `<strong>TGA 2º Período</strong><br>• PODC<br>• Organogramas<br>• Níveis Estratégico, Tático e Operacional<br>• Cultura Organizacional<br>` }
                    ]
                },
                {
                    id: "adm2", icon: "📊", name: "Estatística Aplicada", hours: "225h", trilha: [
                        { tipo: "base", titulo: "Estatística Básica", desc: `<strong>Matemática 2º ano</strong><br>• Análise Combinatória<br>• Probabilidade<br><br><strong>Matemática 3º ano</strong><br>• Média, Moda, Mediana<br>• Desvio Padrão<br>• Gráficos<br>` },
                        { tipo: "faculdade", titulo: "Probabilidade Aplicada", desc: `<strong>Estatística I 2º Período</strong><br>• Bayes<br>• Binomial<br>• Normal<br>• Teorema Central<br>` },
                        { tipo: "faculdade", titulo: "Inferência e Amostragem", desc: `<strong>Estatística II 3º Período</strong><br>• Amostragem<br>• Intervalos de Confiança<br>• Teste de Hipóteses<br>• Regressão Linear<br>` }
                    ]
                }
            ]
        },
        {
            period: "2º Período: Gestão de Pessoas e Mercado", desc: "RH e Marketing", subjects: [
                {
                    id: "adm3", icon: "👥", name: "Gestão de Pessoas", hours: "270h", trilha: [
                        { tipo: "base", titulo: "Comportamento e Comunicação", desc: `<strong>Filosofia 2º ano</strong><br>• Ética<br>• Inteligência Emocional<br><br><strong>Português 2º e 3º ano</strong><br>• Comunicação Assertiva<br>• Redação Corporativa<br>• Oratória<br>` },
                        { tipo: "faculdade", titulo: "Subsistemas de RH", desc: `<strong>Gestão de RH 3º Período</strong><br>• Atração e Retenção<br>• Recrutamento e Seleção<br>• Cargos e Salários<br>• Avaliação<br>` },
                        { tipo: "faculdade", titulo: "Treinamento e Liderança", desc: `<strong>Comportamento Organizacional 4º Período</strong><br>• LNT<br>• Estilos de Liderança<br>• Motivação (Maslow, Herzberg)<br>• Gestão da Mudança<br>` }
                    ]
                },
                {
                    id: "adm4", icon: "💰", name: "Gestão de Marketing", hours: "240h", trilha: [
                        { tipo: "base", titulo: "Geopolítica e Consumo", desc: `<strong>Geografia 3º ano</strong><br>• Globalização<br>• Sociedade de Consumo<br><br><strong>Arte 2º ano</strong><br>• Semiótica<br>• Função Apelativa<br>` },
                        { tipo: "faculdade", titulo: "Mix de Marketing", desc: `<strong>Marketing I 3º Período</strong><br>• Comportamento do Consumidor<br>• 4 Ps<br>• Ciclo de Vida<br>• Canais de Distribuição<br>` },
                        { tipo: "faculdade", titulo: "Marketing Estratégico", desc: `<strong>Marketing II 4º Período</strong><br>• Segmentação<br>• Branding<br>• Pesquisa de Mercado<br>• Marketing Digital<br>` }
                    ]
                }
            ]
        },
        {
            period: "3º Período: Estratégia e Finanças", desc: "Planejamento estrutural", subjects: [
                {
                    id: "adm5", icon: "🎯", name: "Planejamento Estratégico", hours: "270h", trilha: [
                        { tipo: "base", titulo: "Análise de Cenários", desc: `<strong>Geografia 3º ano</strong><br>• Blocos Econômicos<br>• Comércio Internacional<br><br><strong>Filosofia e Sociologia 3º ano</strong><br>• Racionalidade Limitada<br>• ESG<br>` },
                        { tipo: "faculdade", titulo: "Diretrizes e Diagnóstico", desc: `<strong>Planejamento Estratégico 5º Período</strong><br>• Missão, Visão, Valores<br>• PESTEL<br>• SWOT<br>• 5 Forças de Porter<br>` },
                        { tipo: "faculdade", titulo: "Execução e Controle", desc: `<strong>Gestão Estratégica 6º Período</strong><br>• Matriz BCG<br>• BSC<br>• KPIs<br>• OKR<br>` }
                    ]
                },
                {
                    id: "adm6", icon: "📈", name: "Administração Financeira", hours: "240h", trilha: [
                        { tipo: "base", titulo: "Matemática Financeira", desc: `<strong>Matemática 1º e 2º ano</strong><br>• Porcentagem<br>• Funções Exponenciais<br>• Juros Simples e Compostos<br>` },
                        { tipo: "faculdade", titulo: "Análise de Investimentos", desc: `<strong>Finanças I 4º Período</strong><br>• Custo de Oportunidade<br>• VPL<br>• TIR<br>• Payback<br>` },
                        { tipo: "faculdade", titulo: "Finanças Corporativas", desc: `<strong>Finanças II 5º Período</strong><br>• Balanço e DRE<br>• Capital de Giro<br>• Alavancagem<br>• Estrutura de Capital<br>` }
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
                        { tipo: "base", titulo: "Filosofia Política", desc: `<strong>Filosofia 1º e 2º ano</strong><br>• Justiça em Platão e Aristóteles<br>• Ética e Moral<br><br><strong>Sociologia 2º ano</strong><br>• Contratualistas<br>• Formação do Estado<br>• Cidadania<br>` },
                        { tipo: "faculdade", titulo: "Fontes e Ramos do Direito", desc: `<strong>Introdução ao Estudo do Direito 1º Período</strong><br>• Público vs Privado<br>• Jusnaturalismo vs Juspositivismo<br>• Fontes Formais e Materiais<br>` },
                        { tipo: "faculdade", titulo: "A Norma Jurídica", desc: `<strong>Teoria Geral do Direito 2º Período</strong><br>• Vigência, Validade, Eficácia<br>• Hermenêutica<br>• Integração<br>• Antinomias<br>` }
                    ]
                },
                {
                    id: "dir2", icon: "📜", name: "Direito Constitucional", hours: "225h", trilha: [
                        { tipo: "base", titulo: "Constituições Brasileiras", desc: `<strong>História 3º ano</strong><br>• 1824<br>• Era Vargas<br>• Regime Militar<br>• 1988<br><br><strong>Sociologia 3º ano</strong><br>• Direitos Humanos<br>` },
                        { tipo: "faculdade", titulo: "Teoria da Constituição", desc: `<strong>Direito Constitucional I 2º Período</strong><br>• Poder Constituinte<br>• Princípios Fundamentais<br>• Art. 5º<br>• Remédios Constitucionais<br>` },
                        { tipo: "faculdade", titulo: "Organização do Estado", desc: `<strong>Direito Constitucional II 3º Período</strong><br>• Competências<br>• Três Poderes<br>• Processo Legislativo<br>• Controle de Constitucionalidade<br>` }
                    ]
                }
            ]
        },
        {
            period: "2º Período: Relações Civis e Privadas", desc: "O dia a dia jurídico", subjects: [
                {
                    id: "dir3", icon: "📝", name: "Direito Civil - Parte Geral", hours: "270h", trilha: [
                        { tipo: "base", titulo: "Indivíduo e Sociedade", desc: `<strong>Filosofia 2º ano</strong><br>• Sujeito de Direitos<br>• Dignidade Humana<br><br><strong>Sociologia 1º e 2º ano</strong><br>• Família<br>• Propriedade Privada<br>` },
                        { tipo: "faculdade", titulo: "Pessoas Físicas e Jurídicas", desc: `<strong>Direito Civil I 3º Período</strong><br>• Personalidade<br>• Capacidade<br>• Direitos da Personalidade<br>• Pessoas Jurídicas<br>` },
                        { tipo: "faculdade", titulo: "Bens e Negócios", desc: `<strong>Direito Civil II 4º Período</strong><br>• Classificação dos Bens<br>• Negócio Jurídico<br>• Defeitos<br>• Nulidade<br>` }
                    ]
                },
                {
                    id: "dir4", icon: "🏠", name: "Direito das Obrigações", hours: "240h", trilha: [
                        { tipo: "base", titulo: "Educação Financeira", desc: `<strong>Matemática 2º ano</strong><br>• Contratos<br>• Juros<br>• Cheques<br><br><strong>Filosofia 3º ano</strong><br>• Causalidade<br>• Boa-fé<br>` },
                        { tipo: "faculdade", titulo: "Teoria das Obrigações", desc: `<strong>Direito Civil III 4º Período</strong><br>• Elementos<br>• Dar, Fazer, Não Fazer<br>• Solidárias<br>• Cessão de Crédito<br>` },
                        { tipo: "faculdade", titulo: "Adimplemento", desc: `<strong>Direito Civil IV 5º Período</strong><br>• Pagamento<br>• Mora<br>• Perdas e Danos<br>• Cláusula Penal<br>` }
                    ]
                }
            ]
        },
        {
            period: "3º Período: Sistema Penal e Processual", desc: "Punição e tramitação", subjects: [
                {
                    id: "dir5", icon: "🔒", name: "Direito Penal", hours: "270h", trilha: [
                        { tipo: "base", titulo: "Violência e Controle Social", desc: `<strong>Sociologia 3º ano</strong><br>• Foucault<br>• Criminalidade<br>• Violência<br><br><strong>Filosofia 2º ano</strong><br>• Livre-arbítrio<br>• Legítima Defesa<br>` },
                        { tipo: "faculdade", titulo: "Teoria do Crime", desc: `<strong>Direito Penal I 3º Período</strong><br>• Fato Típico<br>• Ilicitude<br>• Culpabilidade<br>• Erro<br>• Tentativa<br>` },
                        { tipo: "faculdade", titulo: "Teoria da Pena", desc: `<strong>Direito Penal II 4º Período</strong><br>• Penas Privativas<br>• Restritivas e Multa<br>• Dosimetria<br>• Concurso<br>• Sursis<br>` }
                    ]
                },
                {
                    id: "dir6", icon: "⚙️", name: "Direito Processual Civil", hours: "240h", trilha: [
                        { tipo: "base", titulo: "Argumentação e Retórica", desc: `<strong>Português 3º ano</strong><br>• Dissertação<br>• Coesão<br><br><strong>Filosofia 2º ano</strong><br>• Lógica<br>• Silogismos<br>` },
                        { tipo: "faculdade", titulo: "Fase de Conhecimento", desc: `<strong>Processo Civil I 4º Período</strong><br>• Petição Inicial<br>• Citação<br>• Contestação<br>• Audiência<br>• Sentença<br>` },
                        { tipo: "faculdade", titulo: "Sistema Recursal", desc: `<strong>Processo Civil II 5º Período</strong><br>• Teoria Geral dos Recursos<br>• Apelação<br>• Agravo<br>• Embargos<br>• REsp e RE<br>` }
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
                        { tipo: "base", titulo: "Filosofia da Mente", desc: `<strong>Filosofia 1º e 2º ano</strong><br>• Sócrates e Platão<br>• Descartes<br>• Empirismo vs Racionalismo<br>• Existencialismo<br>` },
                        { tipo: "faculdade", titulo: "Psicologia Científica", desc: `<strong>História da Psicologia 1º Período</strong><br>• Wundt<br>• Estruturalismo<br>• Funcionalismo<br>` },
                        { tipo: "faculdade", titulo: "Behaviorismo", desc: `<strong>Análise do Comportamento 2º Período</strong><br>• Pavlov<br>• Watson<br>• Skinner<br>• Reforço e Punição<br>` }
                    ]
                },
                {
                    id: "psi2", icon: "📚", name: "Psicologia do Desenvolvimento", hours: "225h", trilha: [
                        { tipo: "base", titulo: "Genética e Sociedade", desc: `<strong>Biologia 3º ano</strong><br>• Hereditariedade<br>• Neuroplasticidade<br><br><strong>Sociologia 2º ano</strong><br>• Socialização<br>• Identidade<br>` },
                        { tipo: "faculdade", titulo: "Desenvolvimento Cognitivo", desc: `<strong>Psicologia do Desenvolvimento I 2º Período</strong><br>• Piaget<br>• Vygotsky<br>• Zona Proximal<br>` },
                        { tipo: "faculdade", titulo: "Psicanalítico e Psicossocial", desc: `<strong>Psicologia do Desenvolvimento II 3º Período</strong><br>• Freud<br>• Erikson<br>• Bowlby<br>• Luto<br>` }
                    ]
                }
            ]
        },
        {
            period: "2º Período: Processos Clínicos e Sociais", desc: "A mente e a sociedade", subjects: [
                {
                    id: "psi3", icon: "😔", name: "Psicopatologia", hours: "270h", trilha: [
                        { tipo: "base", titulo: "Neuroquímica e Saúde", desc: `<strong>Biologia 2º ano</strong><br>• Sinapses<br>• Neurotransmissores<br>• Sistema Límbico<br><br><strong>Sociologia 3º ano</strong><br>• Foucault<br>• Normal vs Patológico<br>• Estigma<br>` },
                        { tipo: "faculdade", titulo: "Semiologia Psiquiátrica", desc: `<strong>Psicopatologia I 3º Período</strong><br>• Consciência<br>• Pensamento<br>• DSM-5<br>• Ansiedade<br>` },
                        { tipo: "faculdade", titulo: "Transtornos Maiores", desc: `<strong>Psicopatologia II 4º Período</strong><br>• Depressão e Bipolaridade<br>• Esquizofrenia<br>• Personalidade<br>• TEA e TDAH<br>` }
                    ]
                },
                {
                    id: "psi4", icon: "🗣️", name: "Psicologia Social", hours: "240h", trilha: [
                        { tipo: "base", titulo: "Comportamento Coletivo", desc: `<strong>Sociologia 1º e 2º ano</strong><br>• Instituições<br>• Ideologia<br>• Preconceito<br><br><strong>História 3º ano</strong><br>• Movimentos de Massa<br>• Direitos Civis<br>` },
                        { tipo: "faculdade", titulo: "Psicologia Social Psicológica", desc: `<strong>Psicologia Social I 4º Período</strong><br>• Cognição Social<br>• Asch e Milgram<br>• Dissonância Cognitiva<br>• Estereótipos<br>` },
                        { tipo: "faculdade", titulo: "Psicologia Social Crítica", desc: `<strong>Psicologia Social II 5º Período</strong><br>• Silvia Lane<br>• Identidade<br>• Moscovici<br>• Comunidades<br>` }
                    ]
                }
            ]
        },
        {
            period: "3º Período: Terapias e Avaliação", desc: "Intervenção psicológica", subjects: [
                {
                    id: "psi5", icon: "🛋️", name: "Psicanálise e Abordagens", hours: "270h", trilha: [
                        { tipo: "base", titulo: "Mito e Inconsciente", desc: `<strong>Filosofia e Literatura 3º ano</strong><br>• Complexo de Édipo<br>• Surrealismo<br>• Nietzsche<br>` },
                        { tipo: "faculdade", titulo: "Fundamentos da Psicanálise", desc: `<strong>Psicanálise I 5º Período</strong><br>• Primeira Tópica<br>• Segunda Tópica<br>• Mecanismos de Defesa<br>• Sonhos<br>` },
                        { tipo: "faculdade", titulo: "Desdobramentos Clínicos", desc: `<strong>Teorias da Personalidade 6º Período</strong><br>• Jung<br>• Lacan<br>• Rogers<br>• TCC<br>` }
                    ]
                },
                {
                    id: "psi6", icon: "📋", name: "Avaliação Psicológica", hours: "240h", trilha: [
                        { tipo: "base", titulo: "Estatística e Metodologia", desc: `<strong>Matemática 2º e 3º ano</strong><br>• Média, Moda, Mediana<br>• Desvio Padrão<br>• Gráficos<br><br><strong>Metodologia</strong><br>• Método Científico<br>• Ética<br>` },
                        { tipo: "faculdade", titulo: "Psicometria e Testes", desc: `<strong>Avaliação Psicológica I 5º Período</strong><br>• Validade<br>• Fidedignidade<br>• WAIS, WISC<br>• Rorschach<br>` },
                        { tipo: "faculdade", titulo: "Laudos e Entrevistas", desc: `<strong>Avaliação Psicológica II 6º Período</strong><br>• Anamnese<br>• Observação<br>• Documentos CFP<br>• Devolutiva<br>` }
                    ]
                }
            ]
        }
    ]
};