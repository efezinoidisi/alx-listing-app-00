import useToggle from '@/utils/hooks/use-toggle';
import { cn } from '@/utils/utils';
import Link from 'next/link';
import React from 'react';
import Button from './common/Button';

const UserProfileLink: React.FC = () => {
  const [isProfileDropdownVisibile, toggleIsProfileDropdownVisible] =
    useToggle();
  return (
    <div className='relative'>
      <Button
        aria-label='view profile'
        className='ml-5 lg:hidden'
        onClick={toggleIsProfileDropdownVisible}
      >
        <svg
          width='46'
          height='46'
          viewBox='0 0 46 46'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className=''
        >
          <g clipPath='url(#clip0_84_290)'>
            <rect width='46' height='46' rx='23' fill='#34967C' />
            <g clipPath='url(#clip1_84_290)'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M22.8063 25.6118C27.3398 25.6118 31.0288 21.9228 31.0288 17.3875C31.0288 12.853 27.3398 9.16406 22.8063 9.16406C18.2728 9.16406 14.5802 12.853 14.5802 17.3875C14.5793 21.9228 18.2728 25.6118 22.8063 25.6118ZM23.0004 1.88672C34.6405 1.88672 44.1136 11.358 44.1136 23C44.1136 28.5173 41.9843 33.5459 38.5065 37.3112C37.2559 34.3751 35.2281 31.8478 32.6082 29.9701C29.727 27.9082 26.3381 26.7896 22.8099 26.7366C22.8054 26.7357 22.8018 26.7357 22.7973 26.7366C19.324 26.7887 15.9818 27.8758 13.1301 29.8793C10.5399 31.6996 8.51216 34.1577 7.22739 37.0201C3.90677 33.2889 1.88708 28.3762 1.88708 23C1.88708 11.358 11.3602 1.88672 23.0004 1.88672ZM38.5658 7.43547C42.7238 11.5934 45.013 17.1206 45.013 23C45.013 28.8794 42.7229 34.4075 38.5658 38.5645C34.4087 42.7225 28.8815 45.0117 23.0004 45.0117C17.1228 45.0117 11.592 42.7225 7.43493 38.5645C3.27696 34.4075 0.986847 28.8794 0.986847 23C0.986847 17.1206 3.27696 11.5934 7.43403 7.43547C11.592 3.2784 17.1228 0.988281 23.0004 0.988281C28.8815 0.988281 34.4087 3.2784 38.5658 7.43547Z'
                fill='white'
              />
            </g>
          </g>
          <defs>
            <clipPath id='clip0_84_290'>
              <rect width='46' height='46' rx='23' fill='white' />
            </clipPath>
            <clipPath id='clip1_84_290'>
              <rect width='46' height='46' fill='white' />
            </clipPath>
          </defs>
        </svg>
      </Button>

      <div
        className={cn(
          'items-center gap-2 hidden',
          isProfileDropdownVisibile
            ? 'absolute top-full right-0 bg-background px-4 py-5 rounded-3xl z-30 flex flex-col border border-grey-400 gap-3 lg:static lg:border-none lg:flex-row'
            : 'lg:flex'
        )}
      >
        <Link href={''} className='bg-primary text-white rounded-70 py-3 px-5'>
          Sign in
        </Link>

        <Link href={''} className='border border-grey-400 rounded-70 py-3 px-5'>
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default UserProfileLink;