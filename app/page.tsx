'use client'

import { useFormState } from 'react-dom'
import Image from "next/image";
import { AddMessage } from '../action/addMessage';
const initialState = {
  success: false,
  message: null,
}
export default function Home() {
  // @ts-ignore
  const [state, formAction] = useFormState(AddMessage, initialState)
  const numbers = [1, 2, 3, 4, 5, 6, 7 ,8 ,9,10,11]
  return (
    <main className="bg-gradient-to-b from-yellow-200 via-yellow-100 to-yellow-200 flex items-center w-full min-h-screen overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center px-10">
        <Image src={"/king10.png"} alt="" width={1000} height={200} className='lg:w-[1000px] lg:h-[500px]' />
          <form action={formAction}>
            <div className="flex flex-col gap-5 items-center p-10">
                <div className="flex flex-col">
                  <p>ข้าพระพุทธเจ้า *</p>
                  <input className="md:w-[500px] lg:w-[1000px] w-72 p-2" type="text" name="name" placeholder="ชื่อ-สกุล / Name" required/>
                </div>
                <div className="flex flex-col">
                  <p>ระดับชั้น *</p>
                  <select name="class" id="class" className="md:w-[500px] lg:w-[1000px] w-72 p-2" required>
                  <option value="" disabled selected>กรุณาเลือกห้องเรียน</option>
                  {numbers.map((number, index) => (
                    <option key={index}>{number}</option>
                  ))}
                  </select>
                </div>
                <div className="flex flex-col">
                  <p>เบอร์โทรศัพท์ *</p>
                  <input className="md:w-[500px] lg:w-[1000px] w-72  p-2" type="text" name="phoneNumber" placeholder="เบอร์โทรศัพท์ / Phone number" required/>
                </div>
                <button type="submit" className="flex gap-10 ">
                  <p className="p-2 bg-yellow-400 rounded-xl">ลงนามถวายพระพร</p>
                </button>
            </div>
          </form>
      </div>
    </main>
  );
}
