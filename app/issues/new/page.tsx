"use client";
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";

type IssueForm = {
  title: string;
  description: string;
};

const NewIssuePage = () => {
  const { register, control } = useForm<IssueForm>();

  console.log(register("title"));

  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="title" {...register("title")} />
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
