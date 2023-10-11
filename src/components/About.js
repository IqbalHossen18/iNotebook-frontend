import React from "react";
// import noteContext from '../Context/notes/NoteContext'
export const About = () => {
  // const a = useContext(noteContext);
  // useEffect(() => {
  //   a.update();
  //   }, [])

  return (
     <>
      <div className="container row my-3 d-flex justify-content-center">
        <div className="col-md-3">
          <div className="card text-white bg-success mb-3">
            <div className="card-header">Add Note</div>
            <div className="card-body">
              <h5 className="card-title">Adding Notes Facilities</h5>
              <p className="card-text">
                Adding notes in a notebook is a straightforward process. To
                begin, open your preferred note-taking app or physical notebook.
                Create a new note or page where you can input your information.
                Start by giving your note a title, offering a quick overview of
                its content. Then, provide a detailed description of the subject
                matter, project, or idea you wish to capture. If needed,
                categorize your note with relevant tags to facilitate
                organization. Finally, save your note to keep it easily
                accessible and organized within your notebook.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-dark bg-info mb-3">
            <div className="card-header">Edit & Update</div>
            <div className="card-body">
              <h5 className="card-title">Edit Before Updating</h5>
              <p className="card-text">
                Editing and updating notes in a notebook is a vital part of the
                note-taking process. When you need to make changes or additions
                to an existing note, simply locate the note you wish to modify.
                Access the edit function, which is typically represented by an
                "Edit" or "Update" option. This allows you to make revisions to
                the title, description, or any other content within the note.
                After completing your edits, remember to save the updated note
                to ensure the latest information is retained. This capability
                makes it convenient to keep your notes accurate and up-to-date,
                reflecting any changes or developments in your projects or
                ideas.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-danger mb-3">
            <div className="card-header">Delete</div>
            <div className="card-body">
              <h5 className="card-title">Be Focus Before Deleting</h5>
              <p className="card-text">
                The focus of deletion in a notebook or note-taking app is
                essential for maintaining organization and decluttering your
                notes. When you decide to delete a note, it's important to
                identify the note you want to remove. Access the "Delete" or
                "Remove" option, typically available within the app's interface.
                By selecting this option, you can effectively eliminate the note
                from your notebook. This focused deletion ensures that
                irrelevant or outdated information is removed, helping you keep
                your notebook concise and uncluttered. Regularly reviewing and
                deleting notes that are no longer needed helps maintain a clear
                and efficient note-keeping system.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-secondary mb-3">
            <div className="card-header">All Notes</div>
            <div className="card-body">
              <h5 className="card-title">Notes In One Tab / Page</h5>
              <p className="card-text">
                The use of tabs or pages in note-taking apps offers an
                invaluable facility for organizing and structuring notes. Each
                tab or page serves as a distinct category or workspace,
                providing focused areas for specific content. This arrangement
                simplifies navigation, reduces clutter, and enhances overall
                organization. It's particularly beneficial for managing various
                projects or topics, ensuring easy access and efficient
                reference. Additionally, tabs or pages can aid collaboration by
                enabling users to share and work on specific sections with ease,
                making note management more productive and visually clear.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
   
  );
};

export default About;
