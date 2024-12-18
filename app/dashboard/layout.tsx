import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({children}:{children:React.ReactNode}) {
    return (
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}{' '}
          <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js-na1.hs-scripts.com/48580043.js"
          ></script>
        </div>
      </div>
    );
}