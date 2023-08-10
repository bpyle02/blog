// import { client } from "@/lib/sanity.client";
// import urlFor from "@/lib/urlFor";
// import { groq } from "next-sanity";
// import { ImageResponse } from "next/server";

// export const contentType = 'image/png';

// export const size = {
//     width: 900,
//     height: 450
// }

// interface Props {
//     params: {
//         slug: string
//     }
// }

// // export default async function ({params: {slug}}: Props) {
// //     const query = groq`
// //         *[_type=="post" && slug.current == $slug][0]
// //         {
// //             ...,
// //             author->,
// //             categories[]->,
// //             "comments": *[_type == 'comment' && post._ref == ^._id] {
// //                 name,
// //                 text,
// //                 _createdAt
// //             }
// //         }
// //     `

// //     const post: Post = await client.fetch(query, { slug: slug });

// //     return new ImageResponse(
// //         <div tw="relative flex items-center justify-center">
// //             <img src={urlFor(post.mainImage).url()} alt={post.title} />
// //             <div tw="absolute flex bg-black opacity-50 inset-0">
// //                 <div tw="absolute flex items-center top-2 w-full">
// //                     <p tw="text-white text-4xl flex font-bold m-5">{post.title}</p>
// //                     <p tw="text-indigo-200 text-xl flex font-bold m-5">{post.author.name}</p>
// //                     {/* <p tw="text-purple-200 text-xl flex font-bold m-5">{new Date(post._updatedAt).toLocaleDateString(
// //                         "en-US", {
// //                             day: "numeric",
// //                             month: "long",
// //                             year: "numeric",
// //                         }
// //                         )}</p> */}
// //                 </div>
// //             </div>
// //         </div>,
// //         size
// //     )
// // }

// export default async function og() {
//     return new ImageResponse(
//       (
//         // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections
//         <div
//           style={{
//             height: '100%',
//             width: '100%',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//             backgroundColor: 'white',
//           }}
//         >
//           <div tw="bg-gray-50 flex">
//             <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
//               <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-left">
//                 <span>Ready to dive in?</span>
//                 <span tw="text-indigo-600">Start your free trial today.</span>
//               </h2>
//               <div tw="mt-8 flex md:mt-0">
//                 <div tw="flex rounded-md shadow">
//                   <a
//                     href="#"
//                     tw="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white"
//                   >
//                     Get started
//                   </a>
//                 </div>
//                 <div tw="ml-3 flex rounded-md shadow">
//                   <a
//                     href="#"
//                     tw="flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600"
//                   >
//                     Learn more
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ),
//       {
//         width: 1200,
//         height: 630,
//       },
//     );
//   }