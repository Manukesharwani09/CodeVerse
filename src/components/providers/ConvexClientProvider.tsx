// "use client";
// import React, { useEffect } from "react";
// import { ClerkProvider, useAuth } from "@clerk/nextjs";
// import { ConvexReactClient } from "convex/react";
// import { ConvexProviderWithClerk } from "convex/react-clerk";

// const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
// const token = await getToken();


// function ConvexClientProvider({ children } : { children: React.ReactNode }) {
//   // 1. Call useAuth to get getToken
//   const { getToken, isSignedIn } = useAuth();

//   // 2. Log the token when signed in
//   useEffect(() => {
//     if (isSignedIn) {
//       (async () => {
//         const token = await getToken({ template: "convex" }); // template optional, see docs
//         console.log("Clerk ID Token sent to Convex:", token);
//       })();
//     }
//   }, [isSignedIn, getToken]);

//   return (
//     <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
//       <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
//         {children}
//       </ConvexProviderWithClerk>
//     </ClerkProvider>
//   );
// }

// export default ConvexClientProvider;



"use client";
import React from "react";
import { ClerkProvider,useAuth } from '@clerk/nextjs';
import { ConvexReactClient } from 'convex/react';
import { ConvexProviderWithClerk } from 'convex/react-clerk';

console.log('NEXT_PUBLIC_CONVEX_URL:', process.env.NEXT_PUBLIC_CONVEX_URL);
console.log('NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:', process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);
console.log("jo");
const convex=new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

function ConvexClientProvider({ children } : { children: React.ReactNode }) {
  return (

    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
            {children}
        </ConvexProviderWithClerk>
      
    </ClerkProvider>
  )
}

export default ConvexClientProvider