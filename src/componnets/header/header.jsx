import profile from '../../assets/user-1.png'

export default function Header(){
    return(
<div className='flex justify-between p-4 px-8 border-2'>
<h1 className="text-3xl font-bold mt-4">Knowlage cafe </h1>
<img className='w-24 rounded-full ' src={profile} alt="" />
</div>
    )
}