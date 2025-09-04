import Header from "./_components/Header";
import EditorPane from "./_components/EditorPanel";
import OutputPane from "./_components/OutputPanel";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1800px] mx-auto p-4">
        <Header/>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <EditorPane/>
          <OutputPane/>
      </div>
    </div>
    </div>

  );
}
