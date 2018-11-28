import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'


class Content extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.content}>
                123
            </div>
        );
    }

}

const styles = theme => ({
    content: {
        height: 1000
    },
});


Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
