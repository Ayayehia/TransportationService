import { StarIcon } from "@heroicons/react/20/solid";
const Review = ({ Reviewform }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  console.log(Reviewform, "Reviewform after confirmation");
  console.log(Reviewform[1], "Reviewform after confirmation");
  const [review, imageReview] = Reviewform;
  return (
    <>
      <div className="border-t-gray-500 border-t-2 w-full" />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg font-medium text-gray-900">Recent reviews</h2>
        <div className="mt-6 space-y-10 divide-y divide-gray-200 border-b border-t border-gray-200 pb-10">
          <div
            //   key={review.id}
            className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8"
          >
            <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
              <div className="flex items-center xl:col-span-1 ">
                <div className="flex items-center">
                  <StarIcon
                    key={4}
                    className={classNames("text-yellow-400")}
                    aria-hidden="true"
                  />
                </div>
                <p className="ml-3 text-sm text-gray-700">
                  {/* {review.rating} */}rating
                  <span className="sr-only"> out of 5 stars</span>
                </p>
              </div>

              <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                <h3 className="text-sm font-medium text-gray-900">
                  {review?.title}
                </h3>

                <div className="mt-3 space-y-6 text-sm text-gray-500">
                  {review?.review}
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
              <p className="font-medium text-gray-900">{review?.username}</p>
              <time
                dateTime={review?.datetime}
                className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
              >
                {review?.date}
              </time>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
