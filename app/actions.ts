'use server'
import { cookies } from 'next/headers'

export async function setDark() {
	await cookies().set('theme', 'dark')
}

export async function changeTheme() {
	return await getTheme() === 'dark' ? cookies().set('theme', 'light')  : cookies().set('theme', 'dark')
}

export async function getTheme() {
	return await cookies().get('theme')?.value
}

