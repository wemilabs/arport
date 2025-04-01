"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SignInForm } from "@/components/forms/sign-in";

export default function SignInModal() {
  const router = useRouter();

  return (
    <Dialog defaultOpen onOpenChange={() => router.back()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sign In</DialogTitle>
          <DialogDescription>
            Please fill in the form to sign in
          </DialogDescription>
        </DialogHeader>
        <SignInForm />
        <DialogFooter>
          <Button type="submit">Sign In</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
