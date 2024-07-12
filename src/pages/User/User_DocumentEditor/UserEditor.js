import React from 'react';
import './UserEditor.css';
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);

function UserEditor() {
    return (
        <div>
            <button>Save</button>
            <DocumentEditorContainerComponent id="container" style={{ 'height': '690px' }} serviceUrl="https://services.syncfusion.com/vue/production/api/documenteditor/" enableToolbar={true}/>  
        </div>
    );
}
export default UserEditor;
