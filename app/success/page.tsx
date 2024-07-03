import Link from "next/link";

export default function page() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="text-center flex flex-col gap-2">
        <p className="text-4xl">คุณได้ลงนามถวายพระพร สำเร็จ!</p>
        <Link className="p-2 bg-yellow-400 rounded-xl" href={"/drug"}>รับชมนิทรรศการต้านยาเสพติดออนไลน์</Link>
      </div>
    </div>
  )
}
