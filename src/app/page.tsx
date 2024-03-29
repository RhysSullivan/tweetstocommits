/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/jt21Z5KbjjK
 */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Github, Twitter } from "lucide-react";

import { redirect } from "next/navigation";
import { type } from "arktype";
const compareInput = type({
  githubUrl: "string",
  twitterUrl: "string",
});

async function goToComparePage(formData: FormData) {
  "use server";
  const githubUrl = formData.get("github-url");
  const twitterUrl = formData.get("twitter-url");
  console.log(githubUrl, twitterUrl, formData, formData.values());
  const { data, problems } = compareInput({ githubUrl, twitterUrl });
  if (problems) {
    return;
  }
  redirect(
    `/compare?githubUrl=${data.githubUrl}&twitterUrl=${data.twitterUrl}`,
  );
}

export default function Component() {
  return (
    <main className="flex flex-grow flex-col items-center justify-center py-6">
      <div className="flex w-full max-w-2xl items-center justify-center space-x-4 py-8">
        <Github size={64} />
        <h2 className="text-4xl font-bold">vs.</h2>
        <Twitter size={64} />
      </div>
      <form
        className="flex w-full max-w-2xl flex-col items-center justify-center space-y-4"
        action={goToComparePage}
      >
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Github size={24} />
          <Input
            className="w-full"
            required
            name="github-url"
            placeholder="GitHub Profile URL"
          />
        </div>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Twitter size={24} />
          <Input
            className="w-full"
            name="twitter-url"
            required
            placeholder="Twitter Profile URL"
          />
        </div>
        <Button className="mt-4" type="submit">
          Submit
        </Button>
      </form>

      <section className="mt-40 flex w-full max-w-6xl flex-col items-center justify-center rounded-md px-4 py-6 text-center">
        <h2 className="mb-4 text-2xl font-bold">Recently Compared</h2>
        <p className="text-lg">
          See some of the recent comparisons made by users:
        </p>
      </section>
    </main>
  );
}
