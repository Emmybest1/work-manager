import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useUniqueIds} from '../../../hooks/use-uniqueid';
import Main from '../../structures/main/main.component';
import {Input} from '../../partials/input/input.component';
import Button from '../../partials/button/button.component';
import {postWork} from '../../../redux/root.actions';
import './add-work.style.scss';

export type TProject = {
  'project-name': string;
  'project-desc': string;
  'project-summary': string;
  'project-author': string;
  'project-date': string | Date;
  'project-images'?: File;
  'project-video'?: File;
  [x: string]: any;
};

const initialNewProject = Object.freeze({
  'project-name': '',
  'project-desc': '',
  'project-summary': '',
  'project-author': '',
  'project-date': '',
  'project-images': undefined,
  'project-video': undefined,
});

const AddWork: React.FC = (): JSX.Element => {
  const [newProject, setNewProject] = useState<TProject>(initialNewProject as TProject);

  const [
    projectNameInputId,
    projectDescInputId,
    projectDateInputId,
    projectAuthorInputId,
    projectSummaryInputId,
    projectImagesInputId,
    projectVideoInputId,
    submitProjectInputId,
  ] = useUniqueIds(8);

  const dispatch = useDispatch();

  const onChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    if (ev.target.type !== 'file') {
      setNewProject({...newProject, [ev.target.name]: ev.target.value});
    } else if (ev.target.type === 'file' && ev.target.accept === 'image/*') {
      const selectedFile = ev.target.files![0];

      if (!!selectedFile) {
        setNewProject({...newProject, [ev.target.name]: selectedFile});
      }
    } else if (ev.target.type === 'file' && ev.target.accept === 'video/*') {
      const selectedFile = ev.target.files![0];

      if (!!selectedFile) {
        setNewProject({...newProject, [ev.target.name]: selectedFile});
      }
    }
  };

  return (
    <Main>
      <div className="addwork-container">
        <div className="addwork-container__row1">
          <img src={`${process.env.PUBLIC_URL}/assets/images/creativity.jpg`} alt="" className="creative-img" />
        </div>

        <form
          className="addwork-container__row2"
          onSubmit={(ev: React.FormEvent) => {
            ev.preventDefault();
            dispatch(postWork(newProject));
            setNewProject(initialNewProject as TProject);
          }}
        >
          <Input
            id={projectNameInputId}
            type="text"
            name="project-name"
            labelText="PROJECT NAME"
            placeholder="The fall of Benin great wall"
            required={true}
            value={newProject['project-name']}
            onChange={onChangeHandler}
          />

          <Input
            id={projectDescInputId}
            type="textarea"
            name="project-desc"
            labelText="DESCRIPTION"
            placeholder="Full content https://googledrive"
            className="desc"
            required={true}
            value={newProject['project-desc']}
            onChange={onChangeHandler}
          />

          <Input
            id={projectSummaryInputId}
            type="text"
            name="project-summary"
            labelText="SUMMARY"
            placeholder="Making history of the then Benin kingdom easily accessible."
            value={newProject['project-summary']}
            onChange={onChangeHandler}
          />

          <Input
            id={projectDateInputId}
            type="date"
            name="project-date"
            labelText="DATE"
            value={newProject['project-date']}
            onChange={onChangeHandler}
          />

          <Input
            id={projectAuthorInputId}
            type="text"
            name="project-author"
            placeholder="Sasha Blanca"
            labelText="AUTHOR"
            value={newProject['project-author']}
            required={true}
            onChange={onChangeHandler}
          />

          <label className="file">
            <Input
              id={projectImagesInputId}
              type="file"
              name="project-images"
              accept="image/*"
              multiple={true}
              onChange={onChangeHandler}
            />
            <span className="file-custom"></span>
          </label>

          {!!newProject['project-images'] && (
            <div role="row" className="image-placeholder">
              <p>{newProject['project-images']?.name}</p>
              <Button onClick={() => setNewProject({...newProject, 'project-images': undefined})}>delete</Button>
            </div>
          )}

          <label className="file">
            <Input
              id={projectVideoInputId}
              type="file"
              name="project-video"
              accept="video/*"
              onChange={onChangeHandler}
            />
            <span className="file-custom file-custom--video"></span>
          </label>

          <Input
            id={submitProjectInputId}
            type="submit"
            value="Submit"
            disabled={newProject['project-name'] !== ' ' ? '' : 'disabled'}
          />
        </form>
      </div>
    </Main>
  );
};

export default AddWork;
