"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Profile() {
  const { toast } = useToast();
  
  const [name, setName] = useState("Demo User");
  const [email, setEmail] = useState("user@example.com");
  const [defaultSourceLanguage, setDefaultSourceLanguage] = useState("ancient-greek");
  const [defaultTargetLanguage, setDefaultTargetLanguage] = useState("english");
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdateProfile = () => {
    setIsUpdating(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsUpdating(false);
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      });
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Profile</h1>
      
      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
            <TabsTrigger value="subscription">Subscription</TabsTrigger>
          </TabsList>
          
          <TabsContent value="account" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>
                  Update your account details and personal information.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input
                    id="current-password"
                    type="password"
                    placeholder="Enter your current password"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input
                    id="new-password"
                    type="password"
                    placeholder="Enter a new password"
                  />
                </div>
                
                <Button 
                  onClick={handleUpdateProfile} 
                  disabled={isUpdating}
                >
                  {isUpdating ? "Updating..." : "Update Profile"}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="preferences" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Translation Preferences</CardTitle>
                <CardDescription>
                  Customize your translation experience.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="default-source">Default Source Language</Label>
                  <Select 
                    value={defaultSourceLanguage} 
                    onValueChange={setDefaultSourceLanguage}
                  >
                    <SelectTrigger id="default-source">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ancient-greek">Ancient Greek (Koine)</SelectItem>
                      <SelectItem value="classical-greek">Ancient Greek (Classical)</SelectItem>
                      <SelectItem value="modern-greek">Modern Greek</SelectItem>
                      <SelectItem value="latin">Latin</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="default-target">Default Target Language</Label>
                  <Select 
                    value={defaultTargetLanguage} 
                    onValueChange={setDefaultTargetLanguage}
                  >
                    <SelectTrigger id="default-target">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ancient-greek">Ancient Greek (Koine)</SelectItem>
                      <SelectItem value="classical-greek">Ancient Greek (Classical)</SelectItem>
                      <SelectItem value="modern-greek">Modern Greek</SelectItem>
                      <SelectItem value="latin">Latin</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Display Options</Label>
                  <div className="flex items-center space-x-2 pt-2">
                    <input type="checkbox" id="show-grammar" className="rounded" defaultChecked />
                    <Label htmlFor="show-grammar" className="font-normal">Show grammatical analysis by default</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="show-context" className="rounded" defaultChecked />
                    <Label htmlFor="show-context" className="font-normal">Show historical context by default</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="auto-save" className="rounded" defaultChecked />
                    <Label htmlFor="auto-save" className="font-normal">Automatically save translations to history</Label>
                  </div>
                </div>
                
                <Button 
                  onClick={() => {
                    toast({
                      title: "Preferences saved",
                      description: "Your preferences have been updated.",
                    });
                  }}
                >
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="subscription" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Subscription Plan</CardTitle>
                <CardDescription>
                  Manage your subscription and billing information.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-medium">Current Plan: Free</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    You are currently on the free plan with limited features.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Premium Plan</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-medium text-xl mb-2">$9.99/month</p>
                      <ul className="space-y-1 text-sm mb-4">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Unlimited translations</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Advanced grammatical analysis</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Document translation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Export in multiple formats</span>
                        </li>
                      </ul>
                      <Button className="w-full">Upgrade</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Scholar Plan</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-medium text-xl mb-2">$19.99/month</p>
                      <ul className="space-y-1 text-sm mb-4">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>All Premium features</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>API access</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Batch processing</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Priority support</span>
                        </li>
                      </ul>
                      <Button className="w-full">Upgrade</Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}