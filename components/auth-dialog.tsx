"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Lock, User, Building, Phone } from "lucide-react"
import Link from "next/link"

interface AuthDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AuthDialog({ open, onOpenChange }: AuthDialogProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/portal"
    }, 1500)
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/portal"
    }, 1500)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-lyra-dark border-lyra-medium/50 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-bold">
            <span className="bg-gradient-to-r from-lyra-blue-light to-lyra-purple-light bg-clip-text text-transparent">
              Customer Portal
            </span>
          </DialogTitle>
          <DialogDescription className="text-lyra-text-muted">
            Access your quotes and manage your account to get help & support.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-lyra-medium/20">
            <TabsTrigger value="login" className="data-[state=active]:bg-lyra-blue/30">
              Sign In
            </TabsTrigger>
            <TabsTrigger value="signup" className="data-[state=active]:bg-lyra-purple/30">
              Sign Up
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4 mt-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-email" className="text-lyra-text-primary">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-lyra-text-muted" />
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-lyra-medium/20 border-lyra-medium/50 text-lyra-text-primary pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="login-password" className="text-lyra-text-primary">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-lyra-text-muted" />
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    className="bg-lyra-medium/20 border-lyra-medium/50 text-lyra-text-primary pl-10"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Link href="#" className="text-sm text-lyra-blue-light hover:text-lyra-blue transition-colors">
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-lyra-blue to-lyra-purple hover:from-lyra-blue-dark hover:to-lyra-purple-dark"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="signup" className="space-y-4 mt-6">
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signup-name" className="text-lyra-text-primary">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-lyra-text-muted" />
                  <Input
                    id="signup-name"
                    type="text"
                    placeholder="John Smith"
                    className="bg-lyra-medium/20 border-lyra-medium/50 text-lyra-text-primary pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-email" className="text-lyra-text-primary">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-lyra-text-muted" />
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-lyra-medium/20 border-lyra-medium/50 text-lyra-text-primary pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-company" className="text-lyra-text-primary">
                  Company
                </Label>
                <div className="relative">
                  <Building className="absolute left-3 top-3 h-4 w-4 text-lyra-text-muted" />
                  <Input
                    id="signup-company"
                    type="text"
                    placeholder="Your Company"
                    className="bg-lyra-medium/20 border-lyra-medium/50 text-lyra-text-primary pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-phone" className="text-lyra-text-primary">
                  Phone
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-lyra-text-muted" />
                  <Input
                    id="signup-phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="bg-lyra-medium/20 border-lyra-medium/50 text-lyra-text-primary pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-password" className="text-lyra-text-primary">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-lyra-text-muted" />
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    className="bg-lyra-medium/20 border-lyra-medium/50 text-lyra-text-primary pl-10"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-lyra-blue to-lyra-purple hover:from-lyra-blue-dark hover:to-lyra-purple-dark"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Create Account"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
