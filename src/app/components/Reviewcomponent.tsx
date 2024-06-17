import {
  AvatarImage,
  AvatarFallback,
  Avatar,
} from "@/app/components/ui/avatar";
import { Card } from "@/app/components/ui/card";

const UPLOAD_URL = "https://ucarecdn.com";

export function ReviewComponent({ Reviewform }: { Reviewform: Array<any> }) {
  const [review, imageReview, imageAvatar] = Reviewform;

  return (
    <Card className="w-full max-w-4xl p-6 md:flex md:space-x-8 bg-[#f5f5f5]">
      <div className="flex items-start gap-4">
        {imageAvatar?.map((item: any) => (
          <Avatar className="w-12 h-12 border">
            <AvatarImage
              alt="Avatar"
              className="w-full rounded-lg object-cover"
              height={180}
              src={`${UPLOAD_URL}/${item.uuid}/`}
              style={{
                aspectRatio: "320/180",
                objectFit: "cover",
              }}
              width={320}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        ))}

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">{review?.username}</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {review?.email}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <StarIcon className="w-5 h-5 fill-slate-900 dark:fill-slate-50" />
            <StarIcon className="w-5 h-5 fill-slate-900 dark:fill-slate-50" />
            <StarIcon className="w-5 h-5 fill-slate-900 dark:fill-slate-50" />
            <StarIcon className="w-5 h-5 fill-slate-100 stroke-slate-500 dark:fill-slate-800 dark:stroke-slate-400" />
            <StarIcon className="w-5 h-5 fill-slate-100 stroke-slate-500 dark:fill-slate-800 dark:stroke-slate-400" />
          </div>
        </div>
      </div>
      <div className="space-y-4 mt-6 md:mt-0 md:flex-1">
        <h2 className="text-xl font-semibold"> {review?.title}</h2>
        <p className="text-gray-500 dark:text-gray-400">{review?.review}</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {imageReview?.map((item: any) => (
            <img
              alt="Product Image"
              className="w-full rounded-lg object-cover"
              height={180}
              src={`${UPLOAD_URL}/${item.uuid}/`}
              style={{
                aspectRatio: "320/180",
                objectFit: "cover",
              }}
              width={320}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
