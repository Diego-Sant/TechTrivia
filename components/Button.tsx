import Link from "next/link"

interface ButtonProps {
    href?: string
    text: string
    onClick?: (e: any) => void
}

export default function Button(props: ButtonProps) {

    const renderButton = () => {
        return (
            <button className="bg-[#1c05b3] text-white cursor-pointer rounded-[8px] font-[200] text-[1.2rem] border-none py-[15px] px-[25px] mt-[30px] transition-all ease-in-out hover:scale-[1.1]" onClick={props.onClick}>
                {props.text}
            </button>
        )
    }

    return props.href ? (
        <Link href={props.href}>{renderButton()}</Link>
    ) : renderButton()
}