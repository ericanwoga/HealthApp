import React from 'react'
import { Modal, Header, Icon, Button } from 'semantic-ui-react';


const PageModal = ({title, open, setOpen, content, cancelText, submitText}) => {
    return (
        <Modal
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            open={open}
            style={{width:'80%', borderRadius:'10px'}}
            mountNode={document.getElementsByClassName('phoneContainer')[0]}
        >
            <Header>
                {title}
            </Header>
            <Modal.Content>
                {content}
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' inverted onClick={() => setOpen(false)}>
                <Icon name='remove' /> {cancelText ? cancelText : "Cancel"}
                </Button>
                <Button color='green' inverted onClick={() => setOpen(false)}>
                <Icon name='checkmark' /> {submitText ? submitText : "Submit"}
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default PageModal;