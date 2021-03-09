import React from 'react';
import {useHistory} from 'react-router-dom';
import {TProject} from '../../pages/add-work/add-work.component';
import Button from '../button/button.component';
import './work-card.style.scss';

type TWorkCard = {
  workId?: string;
};
const WorkCard: React.FC<TProject & TWorkCard> = (props): JSX.Element => {
  const history = useHistory();

  return (
    <div className="work-card-container">
      <div className="work-card-container__row1" role="row">
        <img src={props['project-images']?.name ?? 'https://i.ibb.co/t2CJQH1/art.jpg'} alt="" />
      </div>

      <span className="work-card-container__row2" role="row">
        <p className="author-name">{props['project-author']}</p>
        <Button className="more-btn" onClick={() => history.push(`/view-works/${props?.id}`)}>
          MORE <img src={`${process.env.PUBLIC_URL}/assets/images/dropdown.svg`} alt="" />
        </Button>
      </span>

      <div className="work-card-container__row3" role="row">
        <p className="summary">{props['project-summary']}</p>
      </div>

      <div className="work-card-container__row4" role="row">
        <p className="release-date">
          Released: <time>{props['project-date']}</time>
        </p>
      </div>
      {!!props['project-desc'] && props.workId && (
        <div className="work-card-container__row5" role="row">
          <p>{props['project-desc']}</p>
        </div>
      )}
    </div>
  );
};

export default WorkCard;
