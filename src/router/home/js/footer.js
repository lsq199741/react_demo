import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../css/footer.css'


const styles = theme => ({
    spice_footer: {
        flexGrow: 1,
        padding: 50,
        backgroundColor: '#1B1B1B'
    },
    item: {
        textAlign: 'center',
        color: '#E5DFD9',
        fontSize:'12px',
        opacity:0.5
    }
});

class Footer extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.spice_footer}>
                <Grid container
                      spacing={24}
                      direction="row"
                      justify="center"
                      alignItems="stretch">
                    <Grid item xs={4} className={classes.item}>
                        配送服务
                    </Grid>
                    <Grid item xs={4} className={classes.item}>
                        购物帮助
                    </Grid>
                    <Grid item xs={4} className={classes.item}>
                        微信二维码
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
