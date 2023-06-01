import './cardList.css';
import CardContainer from './CardContainer';


function CardList({monsters}){
	return (
		<div className='card-list'>
			{monsters.map((monster) => {
				return (
					<CardContainer monster = {monster} key = {monster.id} />
				);
			})}
		</div>
	);
}

export default CardList;
