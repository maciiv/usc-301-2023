import { Button, FormCheck, Row } from 'react-bootstrap'
import { FunctionComponent, useEffect, useState } from 'react'
import { IInput } from './InputGroupInput'
import HistoryTable from './HistoryTable'
import { useRouteLoaderData } from 'react-router-dom'
import { ILoggedUser } from '../App'

export interface IHistoryData {
	inputs: IInput[]
	result: IInput
	userId?: string
}

export class HistoryData implements IHistoryData {
	inputs: IInput[]
	result: IInput
	userId?: string
	constructor(inputs: IInput[], result: IInput, userId?: string) {
		this.inputs = inputs
		this.result = result
		this.userId = userId
	}
}

interface HistoryProps {
	type: string
	historyRecord?: IHistoryData
}

const History: FunctionComponent<HistoryProps> = function ({
	type,
	historyRecord,
}: HistoryProps) {
	const [history, setHistory] = useState<IHistoryData[]>([])
	const [recordHistory, setRecordHistory] = useState(false)
	const [showHistory, setShowHistory] = useState(false)
	const loggedUser = useRouteLoaderData('root') as ILoggedUser | null

	useEffect(() => {
		;(async () => {
			if (history.length === 0 && loggedUser !== null) {
				const data = await getHistory()
				setHistory(data)
			}
			if (historyRecord !== undefined && recordHistory) {
				setHistory((h) => [...h, historyRecord])
				await saveHistory(historyRecord)
			}
		})()
	}, [historyRecord])

	const clearHistory = async () => {
		setHistory([])
		setShowHistory(false)
		if (loggedUser !== null) await deleteHistory()
	}

	const saveHistory = async (historyRecord: IHistoryData) => {
		await fetch('/api/history/record', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(historyRecord),
		})
	}

	const getHistory = async () => {
		const response = await fetch('/api/history/')
		const data = await response.json()
		return data as IHistoryData[]
	}

	const deleteHistory = async () => {
		await fetch('/api/history/clear', {
			method: 'POST',
		})
	}

	return (
		<Row className='mt-3'>
			<FormCheck
				type='switch'
				id={type + '-switch'}
				onChange={(e) => setRecordHistory(e.target.checked)}
				label='Record history'
				className='mt-3 me-auto ms-3'
			/>
			<div className='d-flex'>
				<Button
					variant='warning'
					className='w-75 mx-auto mt-5 mb-3 show-history'
					onClick={() => setShowHistory(!showHistory)}
				>
					Show history
				</Button>
			</div>
			{showHistory ? <HistoryTable history={history} /> : null}
			<div className='d-flex'>
				<Button
					variant='danger'
					className='w-75 mx-auto my-3 clear-history'
					onClick={clearHistory}
				>
					Clear history
				</Button>
			</div>
		</Row>
	)
}

export default History
