import Image from 'next/image'; // Import if using Next.js's Image component
import Link from 'next/link'; // Import if using Next.js's Link component
import React from 'react';

function ProjectCard({ title, description, imageUrl, linkHref, favorite, year}) {
  return ( //relative overflow-hidden rounded-lg group anim-border p-1 m-1 max-w-xs max-h-48 text-sm
    
    <div className="relative overflow-hidden rounded-lg group anim-border">
      <Link href={linkHref} target="_blank" className="absolute inset-0 z-10" prefetch={false}>
        <span className="sr-only">View Project</span>
      </Link>
      {imageUrl && (
        <Image
        alt={`Screenshot of ${title}`}
        className="mx-auto  max-h-40"
        height={2} // Adjust this as necessary, perhaps using a prop
        src={imageUrl}
        style={{
          objectFit: "cover",
        }}
        width={880} // Adjust this as necessary, perhaps using a prop
      />
      ) }
       <div className="p-4 bg-background">
        <div className="relative inline-block">
          <h3 className="text-lg font-semibold md:text-xl inline">{title}</h3>
          {favorite && (
             <span className="absolute -top-2 -right-4 flex items-center justify-center h-4 w-4">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-900 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
           </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="special">{year}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
