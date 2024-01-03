import { Button } from "@radix-ui/themes";
import Link from "next/link";
import ListIssue from "../components/ListIssue";

const IssuesPage = async () => {
  return (
    <div>
      <Button>
        <Link href={"/issues/new"}>New Issue</Link>
      </Button>
      <ListIssue />
    </div>
  );
};

export default IssuesPage;
