import SideNav from "@/app/ui/dashboard/sidenav";

/**
 * <Layout /> 组件接收一个 children 属性。这个子元素可以是页面，也可以是另一个布局。
 * 在你的例子中， /dashboard 内的页面会自动嵌套在 <Layout /> 中
 *
 * 在页面导航时，只有页面组件会更新，而布局本身不会重新渲染
 *
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
