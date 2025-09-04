"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { ImageIcon, Smile, Send } from "lucide-react"

export function CreatePostForm() {
  const [content, setContent] = useState("")
  const [isPosting, setIsPosting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!content.trim()) return

    setIsPosting(true)
    // Simular envio do post
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setContent("")
    setIsPosting(false)
  }

  return (
    <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            placeholder="O que você está pensando?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[100px] resize-none border-border/50 focus:border-primary transition-colors"
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-200 hover:scale-105"
              >
                <ImageIcon className="h-4 w-4 mr-2" />
                Foto
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-200 hover:scale-105"
              >
                <Smile className="h-4 w-4 mr-2" />
                Emoji
              </Button>
            </div>

            <Button
              type="submit"
              disabled={!content.trim() || isPosting}
              className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
            >
              {isPosting ? (
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground border-t-transparent" />
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Postar
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
