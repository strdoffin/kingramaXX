'use client'
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleInfo, faUser, faMoon , faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect, useRef, MouseEvent } from "react"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

export default function Navbar() {
    const { data: session, status } = useSession()
    //@ts-ignore
    const role = session?.user?.role

    const [open, setOpen] = useState<boolean>(false)
    const btnRef = useRef<HTMLButtonElement>(null)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const btn = () => {
        setOpen(!open)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | Event) => {
            if (
                dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
                btnRef.current && !btnRef.current.contains(event.target as Node)
            ) {
                setOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        status === 'authenticated' && session.user ? (
            <div className="p-4 fixed right-0">
                <button ref={btnRef} onClick={btn} className="relative bg-white rounded-lg text-[#354259] shadow-lg transition-all duration-300 cursor-pointer ">
                    <div className="flex justify-between items-center p-2 mb-2 w-72">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 items-center bg-white border-2 rounded-full flex">
                                {session.user.image ? (
                                    <Image src={session.user.image} width={48} height={48} alt="profile" className="rounded-full" />
                                ) : (
                                    <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full">
                                        <FontAwesomeIcon icon={faUser} width={24} />
                                    </div>
                                )}
                            </div>
                            <h2 className="text-lg font-thin">{session.user.name}</h2>
                        </div>
                        <div className="p-1 rounded-lg text-xs bg-[#354259] text-white">{role}</div>
                    </div>
                    {open && (
                        <div ref={dropdownRef} className="absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-lg overflow-hidden max-h-96 transition-all duration-300 ease-in-out">
                            {status !== 'authenticated' ? (
                                <button onClick={()=>{signIn()}} className="p-5 transition-opacity duration-300 ease-in-out hover:text-white hover:bg-[#4b668f] flex justify-between items-center">
                                    <p>Sign in</p><FontAwesomeIcon icon={faUser} width={15} />
                                </button>
                            ) : (
                                <button onClick={()=>{signOut()}} className="w-full p-5 transition-opacity duration-300 ease-in-out hover:text-white hover:bg-[#4b668f] flex justify-between items-center">
                                    <p>Logout</p><FontAwesomeIcon icon={faRightFromBracket} width={15} />
                                </button>
                            )}
                            <Link href={"/"} className="p-5 transition-opacity duration-300 ease-in-out hover:text-white hover:bg-[#4b668f] flex justify-between items-center">
                                <p>Help</p><FontAwesomeIcon icon={faCircleInfo} width={15} />
                            </Link>
                            <Link href={"/"} className="p-5 transition-opacity duration-300 ease-in-out hover:text-white hover:bg-[#4b668f] flex justify-between items-center">
                                <p>Dark Mode</p><FontAwesomeIcon icon={faMoon} width={15} />
                            </Link>
                        </div>
                    )}
                </button>
            </div>
        ) : (
            <div className="p-4 fixed right-0">
                <button ref={btnRef} onClick={btn} className="relative bg-white rounded-lg text-[#354259] shadow-lg transition-all duration-300 cursor-pointer ">
                    <div className="flex justify-between items-center p-2 mb-2 w-72">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 items-center bg-white border-2 rounded-full flex">
                                <Image src="/next.svg" width={48} height={48} alt="profile" className="rounded-full" />
                            </div>
                            <h2 className="text-lg font-thin">Guest</h2>
                        </div>
                        <div className="p-1 rounded-lg text-xs bg-[#354259] text-white">Guest</div>
                    </div>
                    {open && (
                        <div ref={dropdownRef} className="absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-lg overflow-hidden max-h-96 transition-all duration-300 ease-in-out">
                            <button onClick={()=>{signIn()}} className="w-full p-5 transition-opacity duration-300 ease-in-out hover:text-white hover:bg-[#4b668f] flex justify-between items-center">
                                <p>Sign in</p><FontAwesomeIcon icon={faUser} width={15} />
                            </button>
                            <Link href={"/"} className="p-5 transition-opacity duration-300 ease-in-out hover:text-white hover:bg-[#4b668f] flex justify-between items-center">
                                <p>Help</p><FontAwesomeIcon icon={faCircleInfo} width={15} />
                            </Link>
                            <Link href={"/"} className="p-5 transition-opacity duration-300 ease-in-out hover:text-white hover:bg-[#4b668f] flex justify-between items-center">
                                <p>Dark Mode</p><FontAwesomeIcon icon={faMoon} width={15} />
                            </Link>
                        </div>
                    )}
                </button>
            </div>
        )
    )
}
