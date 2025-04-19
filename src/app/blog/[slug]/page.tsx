interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function Page({ params }: PageProps) {
  const { slug } = await params;

  console.log(slug);

  return (
    <article className="space-y-12">
      {/* top article banner */}
      <div className="relative">
        {/* cross absolutes */}

        <div
          className="drama-shadow flex h-[350px] w-full flex-col justify-end rounded-3xl bg-cover bg-center bg-no-repeat p-8 md:mb-16 md:h-[600px] md:p-16"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(99, 102, 241, 1) 0%, rgba(99, 102, 241, 0.1) 30%, transparent 35%), url('https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/what-is-kubernetes_kubernetes-community?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1062&hei=620&qlt=100&fit=constrain')`,
          }}
        >
          sdfs
        </div>
      </div>
    </article>
  );
}

export default Page;
