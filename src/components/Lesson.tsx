import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class'
}

export function Lesson({ availableAt, slug, title, type }: LessonProps) {

    const isLessonAvailable = isPast(availableAt)
    const availableFormatted = format(availableAt, "EEEE")

    return (
        <a href="#">
            <span className="text-gray-300">
                {availableAt.toString()}
            </span>

            <div className="rounded border border-gray-500 p-4 mt-2">
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                        <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                            <CheckCircle size={20} />
                            Conteudo liberado
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20} />
                            Em breve
                        </span>
                    )}
                    <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300">
                        {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>

                <strong className="text-gray-200 mt-5 block">
                    {title}
                </strong>
            </div>
        </a>
    )
}