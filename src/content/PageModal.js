import React from 'react'
import { Modal, Header, Icon, Button } from 'semantic-ui-react';


const PageModal = ({title, open, setOpen, setClosed, content, cancelText, submitText, clickDimmerClose, cancelAction, submitAction}) => {
    return (
        <Modal
            onOpen={setOpen}
            onClose={setClosed}
            closeOnEscape={clickDimmerClose != null ? clickDimmerClose : true}
            closeOnDimmerClick={clickDimmerClose != null ? clickDimmerClose : true}
            open={open}
            style={{width:'80%', borderRadius:'10px'}}
            mountNode={document.getElementById('root')}
        >
            <Header>
                {title}
            </Header>
            <Modal.Content>
                {content}
            </Modal.Content>
            <Modal.Actions>
                {cancelText &&
                    <Button color='red' inverted onClick={cancelAction}>
                        <Icon name='remove' /> {cancelText ? cancelText : "Cancel"}
                    </Button>
                }
                {submitText &&
                    <Button color='green' inverted onClick={submitAction}>
                        <Icon name='checkmark' /> {submitText ? submitText : "Submit"}
                    </Button>
                }
            </Modal.Actions>
        </Modal>
    )
}

export default PageModal;