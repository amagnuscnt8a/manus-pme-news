import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { 
  Menu, 
  Search, 
  TrendingUp, 
  Calendar, 
  Users, 
  BookOpen, 
  Star,
  ArrowRight,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react'
import logoImage from './assets/logo_pme_news.png'
import './App.css'

function App() {
  const featuredNews = {
    title: "Novo Programa de Crédito para PMEs Aprovado pelo Governo",
    description: "Medida visa facilitar o acesso ao crédito para micro e pequenas empresas, com juros reduzidos e prazos estendidos.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
    category: "Política",
    date: "24 de Agosto, 2025"
  }

  const recentNews = [
    {
      title: "5 Ferramentas Digitais Essenciais para PMEs em 2025",
      description: "Descubra as melhores soluções tecnológicas para otimizar a gestão do seu negócio.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
      category: "Ferramentas",
      date: "23 de Agosto, 2025"
    },
    {
      title: "Como a Inflação Afeta os Pequenos Negócios",
      description: "Análise dos impactos econômicos e estratégias para manter a competitividade.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=300&h=200&fit=crop",
      category: "Economia",
      date: "22 de Agosto, 2025"
    },
    {
      title: "Tendências de Marketing Digital para PMEs",
      description: "As principais estratégias que estão transformando o marketing para pequenos negócios.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=300&h=200&fit=crop",
      category: "Marketing",
      date: "21 de Agosto, 2025"
    }
  ]

  const trendingTopics = [
    "Crédito para PMEs",
    "Marketing Digital",
    "Gestão Financeira",
    "E-commerce",
    "Sustentabilidade"
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={logoImage} alt="PME News" className="h-12 w-auto" />
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="hover:text-accent transition-colors">Notícias</a>
              <a href="#" className="hover:text-accent transition-colors">Negócios</a>
              <a href="#" className="hover:text-accent transition-colors">Política</a>
              <a href="#" className="hover:text-accent transition-colors">Ferramentas</a>
              <a href="#" className="hover:text-accent transition-colors">Eventos</a>
              <Button variant="secondary" size="sm">Premium</Button>
            </nav>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured News */}
            <Card className="overflow-hidden">
              <div className="relative">
                <img 
                  src={featuredNews.image} 
                  alt={featuredNews.title}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  {featuredNews.category}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{featuredNews.title}</CardTitle>
                <CardDescription className="text-base">
                  {featuredNews.description}
                </CardDescription>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  {featuredNews.date}
                </div>
              </CardHeader>
            </Card>

            {/* Recent News */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <BookOpen className="h-6 w-6 mr-2 text-primary" />
                Notícias Recentes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentNews.map((news, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={news.image} 
                        alt={news.title}
                        className="w-full h-40 object-cover"
                      />
                      <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs">
                        {news.category}
                      </Badge>
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg line-clamp-2">{news.title}</CardTitle>
                      <CardDescription className="text-sm line-clamp-2">
                        {news.description}
                      </CardDescription>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{news.date}</span>
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-accent" />
                  Tópicos em Alta
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {trendingTopics.map((topic, index) => (
                    <div key={index} className="flex items-center justify-between p-2 hover:bg-muted rounded-md cursor-pointer">
                      <span className="text-sm">{topic}</span>
                      <Badge variant="secondary" className="text-xs">#{index + 1}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-accent" />
                  Newsletter
                </CardTitle>
                <CardDescription>
                  Receba as principais notícias do mundo dos negócios diretamente no seu email.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Input placeholder="Seu email" type="email" />
                  <Button className="w-full">Inscrever-se</Button>
                </div>
              </CardContent>
            </Card>

            {/* Advertisement Space */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm text-muted-foreground">Publicidade</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted h-48 rounded-md flex items-center justify-center">
                  <span className="text-muted-foreground">Espaço Publicitário</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src={logoImage} alt="PME News" className="h-10 w-auto mb-4" />
              <p className="text-sm opacity-90">
                O portal de notícias especializado em micro e pequenos negócios.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Seções</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-accent transition-colors">Notícias</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Negócios</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Política</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Ferramentas</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-accent transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Anuncie</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Termos</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="hover:text-accent">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-accent">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-accent">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-accent">
                  <Instagram className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <Separator className="my-6 opacity-20" />
          <div className="text-center text-sm opacity-75">
            © 2025 PME News. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

