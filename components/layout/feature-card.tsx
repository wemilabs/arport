import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type Icons } from "@/components/ui/icons";

export interface FeatureCardProps {
  icon: Icons;
  title: string;
  description: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-all bg-background/50 backdrop-blur-sm">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
