"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"

interface Post {
  id: number
  author: string
  avatar: string
  content: string
  timestamp: string
  likes: number
  comments: number
  shares: number
  image?: string
}

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [likesCount, setLikesCount] = useState(post.likes)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikesCount((prev) => (isLiked ? prev - 1 : prev + 1))
  }

  return (
    <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        {/* Header do post */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Avatar className="ring-2 ring-primary/20">
              <AvatarImage src={post.avatar || "/placeholder.svg"} alt={post.author} />
              <AvatarFallback className="bg-primary/10 text-primary">
                {post.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-foreground">{post.author}</h3>
              <p className="text-sm text-muted-foreground">{post.timestamp}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="hover:bg-accent/10 hover:text-accent">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>

        {/* Conteúdo do post */}
        <div className="mb-4">
          <p className="text-foreground leading-relaxed">{post.content}</p>
          {post.image && (
            <div className="mt-4 rounded-lg overflow-hidden">
              <img
                src={post.image || "/placeholder.svg"}
                alt="Post image"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
        </div>

        {/* Botões de interação */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className={cn(
              "transition-all duration-200 hover:scale-110",
              isLiked
                ? "text-red-500 hover:text-red-600 hover:bg-red-50"
                : "text-muted-foreground hover:text-red-500 hover:bg-red-50",
            )}
          >
            <Heart className={cn("h-4 w-4 mr-2", isLiked && "fill-current")} />
            {likesCount}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 hover:scale-110"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            {post.comments}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-200 hover:scale-110"
          >
            <Share2 className="h-4 w-4 mr-2" />
            {post.shares}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
