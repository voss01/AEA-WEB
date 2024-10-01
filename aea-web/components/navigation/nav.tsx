



import {auth} from '@/server/auth'

import { UserButton } from './user-button';
import { Button } from '../ui/button';
import Link from 'next/link';
import { LogIn } from 'lucide-react';
import Logo from "@/components/navigation/logo"
import { Menu } from './_components/menu';
import ActionButtons from './_components/action-buttons';

export default async function Nav() {
    const session = await auth()

    const user = await auth();
    console.log(user)

     const navbarClasses = `
    flex items-center justify-between space-x-10 bg-white  h-14
    sticky top-0 z-50 border-b border-gray-200
  `;

    return (
      <div className={navbarClasses}>
        <div className="flex items-center justify-center">
          <Logo />
          <Menu />
        </div>

        {!session ? (
          
          <ActionButtons />
        ) : (
          
          <UserButton expires={session?.expires} user={session?.user} />
        )}
      </div>
    );
    
}
