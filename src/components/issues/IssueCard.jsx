import React from "react";
import { useIssues } from "../../context/IssueContext";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThumbsUp,Funnel } from "lucide-react";
import IssueHeader from "@/components/issues/issueHeader"



const IssueCard = () => {
  const { issueDetails, isLoading } = useIssues();

  if (isLoading) return <p className="text-center text-muted-foreground">Loading... Please wait!</p>;

  return (
        <>

<header>
    <div className="mb-10">

    <h1 className="text-4xl font-bold text-[#5664f5]">Campus Watch</h1>
    <h3 className="text-sm text-gray-700" >View and Report Your Issues.</h3>
    </div>
<IssueHeader/>
    
</header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">


      {issueDetails.map((issue) => (
        <Card
          key={issue.id}
          className="rounded-2xl border border-muted shadow-md hover:shadow-lg transition-all cursor-pointer"
        >
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">{issue.title || "Untitled Issue"}</CardTitle>
              <Badge variant="outline" className="text-xs capitalize">
                {issue.status || "open"}
              </Badge>
              <Badge variant="outline" className="text-xs capitalize">
                {"Critical"}
              </Badge>
            </div>
            <div>
                📍Location : {issue.location}
            </div>
          </CardHeader>

          <CardContent>
            {issue.image_url && (
                <div className="w-full h-40 overflow-hidden rounded-lg mb-3">
                <img
                  src={"https://images.shiksha.com/mediadata/images/1674638358php0kwv80.jpeg"}
                  alt="Issue image"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <p className="text-sm text-muted-foreground line-clamp-3">{issue.description}</p>
          </CardContent>

          <CardFooter className="flex justify-between items-center text-xs text-muted-foreground">
            <span>Created by: {issue.created_by || "Unknown"}</span>
            <div className="flex items-center gap-1">
              <ThumbsUp className="w-4 h-4" />
              {issue.upvotes || 0}
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
                  </>
  );
};

export default IssueCard;
