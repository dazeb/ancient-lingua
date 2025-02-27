"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Upload, FileType, Loader2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function FileUpload() {
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [sourceLanguage, setSourceLanguage] = useState("ancient-greek");
  const [targetLanguage, setTargetLanguage] = useState("english");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    
    if (!selectedFile) return;
    
    // Check file type
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png'];
    if (!validTypes.includes(selectedFile.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF, DOC, DOCX, JPG, or PNG file.",
        variant: "destructive",
      });
      return;
    }
    
    // Check file size (10MB max)
    if (selectedFile.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Maximum file size is 10MB.",
        variant: "destructive",
      });
      return;
    }
    
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) return;
    
    setIsUploading(true);
    setUploadProgress(0);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
    
    // Simulate upload completion
    setTimeout(() => {
      clearInterval(interval);
      setUploadProgress(100);
      setIsUploading(false);
      setIsProcessing(true);
      
      // Simulate processing
      setTimeout(() => {
        setIsProcessing(false);
        toast({
          title: "File processed successfully",
          description: "Your document has been processed and is ready for translation.",
        });
        
        // Redirect to results page in a real implementation
      }, 2000);
    }, 2000);
  };

  const getFileIcon = () => {
    if (!file) return null;
    
    if (file.type.includes('pdf')) {
      return <FileType className="h-12 w-12 text-red-500" />;
    } else if (file.type.includes('word')) {
      return <FileType className="h-12 w-12 text-blue-500" />;
    } else if (file.type.includes('image')) {
      return <FileType className="h-12 w-12 text-green-500" />;
    }
    
    return <FileType className="h-12 w-12" />;
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Select value={sourceLanguage} onValueChange={setSourceLanguage}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Source Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ancient-greek">Ancient Greek (Koine)</SelectItem>
                <SelectItem value="classical-greek">Ancient Greek (Classical)</SelectItem>
                <SelectItem value="modern-greek">Modern Greek</SelectItem>
                <SelectItem value="latin">Latin</SelectItem>
                <SelectItem value="english">English</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={targetLanguage} onValueChange={setTargetLanguage}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Target Language" />
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
          
          <div className="border-2 border-dashed rounded-lg p-12 text-center">
            {file ? (
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  {getFileIcon()}
                </div>
                <div>
                  <p className="font-medium">{file.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                
                {isUploading && (
                  <div className="space-y-2">
                    <Progress value={uploadProgress} className="w-full" />
                    <p className="text-sm text-muted-foreground">
                      Uploading... {uploadProgress}%
                    </p>
                  </div>
                )}
                
                {isProcessing && (
                  <div className="flex items-center justify-center space-x-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <p className="text-sm">Processing document...</p>
                  </div>
                )}
                
                {!isUploading && !isProcessing && (
                  <div className="flex items-center justify-center space-x-4">
                    <Button onClick={() => setFile(null)} variant="outline">
                      Change File
                    </Button>
                    <Button onClick={handleUpload}>
                      Process Document
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <Upload className="h-12 w-12 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-medium">Drag and drop your file here or click to browse</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Supports PDF, DOC, DOCX, JPG, and PNG (max 10MB)
                  </p>
                </div>
                <Button asChild variant="outline">
                  <label>
                    Browse Files
                    <input
                      type="file"
                      className="sr-only"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                    />
                  </label>
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}