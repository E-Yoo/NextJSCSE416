import Link from 'next/link'
import Editor from '@monaco-editor/react'

export default function MonacoScreen() {
	return (
        <>
            <Editor
                height='90vh'
                defaultLanguage='javascript'
                defaultValue='// some comment'
            />
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
	)
}