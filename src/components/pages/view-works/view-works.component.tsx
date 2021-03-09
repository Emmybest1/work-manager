import React, {useEffect} from 'react';
import {useParams, RouteComponentProps} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getWorks, getWork} from '../../../redux/root.actions';
import {
  selectErrorWorks,
  selectIsLoadingWorks,
  selectWorks,
  selectErrorWork,
  selectIsLoadingWork,
  selectFetchedWork,
} from '../../../redux/root.selectors';
import WorkCard from '../../partials/work-card/work-card.components';
import Main from '../../structures/main/main.component';
import {TProject} from '../add-work/add-work.component';
import './view-works.style.scss';

type RouteParams = {
  workId: string;
};

const ViewWorks: React.FC<RouteComponentProps> = (): JSX.Element => {
  const {workId} = useParams<RouteParams>();
  const dispatch = useDispatch();

  //works
  const isLoadingWorks = useSelector(selectIsLoadingWorks);
  const errorWorks = useSelector(selectErrorWorks);
  const works = useSelector(selectWorks);

  //work
  const isLoadingWork = useSelector(selectIsLoadingWork);
  const errorWork = useSelector(selectErrorWork);
  const work = useSelector(selectFetchedWork);

  //dispatch getWorks action
  useEffect(() => {
    let isMounted: boolean = true;

    if (isMounted) {
      dispatch(getWorks());
    }

    return () => {
      isMounted = false as boolean;
    };
  }, [dispatch]);

  //dispatch getWork action
  useEffect(() => {
    let isMounted: boolean = true;

    if (isMounted && !!workId) {
      dispatch(getWork(workId));
    }

    return () => {
      isMounted = false as boolean;
    };
  }, [workId, dispatch]);

  console.log('Testing', isLoadingWorks, errorWorks, works);
  console.log('Testing', isLoadingWork, errorWork, work);

  return (
    <div className="page-container page-container--view-works">
      <Main>
        {!workId ? (
          <>
            {!!works ? (
              <div className="view-works-container">
                {works.map((work: TProject) => (
                  <WorkCard {...work} />
                ))}
              </div>
            ) : (
              <p className="empty-content-update">Sorry, no works available.</p>
            )}
          </>
        ) : (
          <div className="view-work-container ">
            <WorkCard {...work} workId={workId} />
          </div>
        )}
      </Main>
    </div>
  );
};

export default ViewWorks;
