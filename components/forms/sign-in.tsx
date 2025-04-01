import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "@/actions/auth";

export function SignInForm() {
  return (
    <form action={signIn}>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="academic-id" className="text-right">
            AcademicID
          </Label>
          <Input
            id="academic-id"
            name="academic-id"
            defaultValue=""
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="password" className="text-right">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            defaultValue=""
            type="password"
            className="col-span-3"
          />
        </div>
      </div>
    </form>
  );
}
