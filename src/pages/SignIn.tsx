import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { HeaderCareer } from "@/career/HeaderCareer";
import { FooterCareer } from "@/career/FooterCareer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignIn() {
  return (
    <>
      <Helmet>
        <title>Sign In | Marcus Facilities</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <HeaderCareer />
      <main className="min-h-[80vh] pt-28 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-md">
          <div className="bg-card border border-border rounded-xl p-8">
            <h1 className="text-2xl font-bold mb-6">Sign in</h1>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                // Wire to your platform auth when ready
              }}
            >
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" autoComplete="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" autoComplete="current-password" required />
              </div>
              <Button type="submit" variant="accent" className="w-full" size="lg">
                Sign in
              </Button>
            </form>
            <p className="text-sm text-muted-foreground mt-6 text-center">
              New here?{" "}
              <Link to="/start/signup" className="underline text-foreground">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </main>
      <FooterCareer />
    </>
  );
}
