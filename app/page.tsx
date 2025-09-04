import { PostCard } from "@/components/post-card"
import { CreatePostForm } from "@/components/create-post-form"
import { Header } from "@/components/header"

// Mock data para demonstração
const mockPosts = [
  {
    id: 1,
    author: "Maria Silva",
    avatar: "/woman-profile.png",
    content:
      "Acabei de descobrir essa nova biblioteca React! As animações são incríveis e super fáceis de implementar. Recomendo muito para quem quer dar aquele toque especial nos projetos! 🚀",
    timestamp: "2 horas atrás",
    likes: 24,
    comments: 8,
    shares: 3,
    image: "/coding-setup-modern.jpg",
  },
  {
    id: 2,
    author: "João Santos",
    avatar: "/man-profile.png",
    content:
      "Que tal compartilharmos nossas experiências com desenvolvimento? Estou sempre aprendendo algo novo e adoro trocar ideias com a comunidade! 💡",
    timestamp: "4 horas atrás",
    likes: 18,
    comments: 12,
    shares: 5,
  },
  {
    id: 3,
    author: "Ana Costa",
    avatar: "/woman-developer.png",
    content:
      "Finalmente terminei meu projeto pessoal! Foi um desafio e tanto, mas o resultado ficou incrível. Nada como a sensação de ver o código funcionando perfeitamente! ✨",
    timestamp: "6 horas atrás",
    likes: 42,
    comments: 15,
    shares: 8,
    image: "/web-application-dashboard.png",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="space-y-6">
          <CreatePostForm />

          <div className="space-y-4">
            {mockPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
