import './App.css';

export function App() {
	return (
		<main className='container'>
			<div className='logo-container'>
				<img
					src='../public/react.svg'
					className='logo-react'
					alt='Imagen giratoria'
				/>
				<img
					src='../public/vite.svg'
					className='logo-vite'
					alt='Imagen giratoria'
				/>
			</div>
			<h1 className='title'>React Personal Boilerplate</h1>
			<div className='text-container'>
				<p className='summary'>
					Esta plantilla base proporciona un punto de partida para crear
					aplicaciones de React. Incluye las configuraciones necesarias y la
					estructura de archivos para establecer rápidamente un entorno de
					desarrollo. Puedes personalizar y ampliar esta plantilla base para
					adaptarla a los requisitos específicos de tu proyecto.
				</p>
			</div>
		</main>
	);
}
