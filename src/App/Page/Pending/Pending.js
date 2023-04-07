import { Box, Button, FormControl, IconButton, Input, Tooltip } from '@material-ui/core';
import { Col, Container, Row } from 'react-bootstrap';
import Breadcrumb from '../../../egret/Component/Breadcrumb';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MaterialReactTable from 'material-react-table';
import { Delete, Edit } from '@mui/icons-material';
const data = [
    {
        name: {
            firstName: 'John',
            lastName: 'Doe',
        },
        address: '261 Erdman Ford',
        city: 'East Daphne',
        state: 'Kentucky',
    },
    {
        name: {
            firstName: 'Jane',
            lastName: 'Doe',
        },
        address: '769 Dominic Grove',
        city: 'Columbus',
        state: 'Ohio',
    },
    {
        name: {
            firstName: 'Joe',
            lastName: 'Doe',
        },
        address: '566 Brakus Inlet',
        city: 'South Linda',
        state: 'West Virginia',
    },
    {
        name: {
            firstName: 'Kevin',
            lastName: 'Vandy',
        },
        address: '722 Emie Stream',
        city: 'Lincoln',
        state: 'Nebraska',
    },
    {
        name: {
            firstName: 'Joshua',
            lastName: 'Rolluffs',
        },
        address: '32188 Larkin Turnpike',
        city: 'Charleston',
        state: 'South Carolina',
    },
    {
        name: {
            firstName: 'Joshua',
            lastName: 'Rolluffs',
        },
        address: '32188 Larkin Turnpike',
        city: 'Charleston',
        state: 'South Carolina',
    },
    {
        name: {
            firstName: 'Joshua',
            lastName: 'Rolluffs',
        },
        address: '32188 Larkin Turnpike',
        city: 'Charleston',
        state: 'South Carolina',
    },
    {
        name: {
            firstName: 'Joshua',
            lastName: 'Rolluffs',
        },
        address: '32188 Larkin Turnpike',
        city: 'Charleston',
        state: 'South Carolina',
    },
    {
        name: {
            firstName: 'Joshua',
            lastName: 'Rolluffs',
        },
        address: '32188 Larkin Turnpike',
        city: 'Charleston',
        state: 'South Carolina',
    },
    {
        name: {
            firstName: 'Joshua',
            lastName: 'Rolluffs',
        },
        address: '32188 Larkin Turnpike',
        city: 'Charleston',
        state: 'South Carolina',
    },
    {
        name: {
            firstName: 'Joshua',
            lastName: 'Rolluffs',
        },
        address: '32188 Larkin Turnpike',
        city: 'Charleston',
        state: 'South Carolina',
    },
];
function Pending() {
    const columns = [
        {
            accessorKey: 'name.firstName', //access nested data with dot notation
            header: 'First Name',
        },
        {
            accessorKey: 'name.lastName',
            header: 'Last Name',
        },
        {
            accessorKey: 'address', //normal accessorKey
            header: 'Address',
        },
        {
            accessorKey: 'city',
            header: 'City',
        },
        {
            accessorKey: 'state',
            header: 'State',
        },
    ];
    return (
        <Container fluid>
            <Row className="mb-30">
                <Col xs="12">
                    <Breadcrumb routeSegments={[{ name: 'Home', path: ' ' }, { name: 'Quản lý Nhân Viên' }]} />
                </Col>
            </Row>
            <Row className="d-flex justify-content-between mb-3">
                <Col md={3} xs={12}>
                    <Button
                        className="align-bottom"
                        variant="contained"
                        color="primary"
                        style={{ textTransform: 'unset' }}
                        onClick={() => {}}
                    >
                        Thêm
                    </Button>
                </Col>
                <Col md={4} sm={12} xs={12}>
                    <FormControl fullWidth style={{ marginTop: '6px' }}>
                        <Input
                            className="search_box w-100"
                            style={{ fontSize: '14px' }}
                            onChange={() => {}}
                            onKeyDown={() => {}}
                            placeholder="Tìm kiếm theo tên và mã"
                            id="search_box"
                            startAdornment={
                                <SearchIcon onClick={() => {}} style={{ position: 'absolute', top: '0', right: '0' }} />
                            }
                        />
                    </FormControl>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <div>
                        {/* {shouldOpenEditorDialog && (
                            <AgencyDialog
                                code_edit={id}
                                handleClose={handleDialogClose}
                                open={shouldOpenEditorDialog}
                                handleOKEditClose={handleOKEditClose}
                            />
                        )} */}

                        {/* {shouldOpenConfirmationDialog && (
                            <ConfirmationDialog
                                title={t('general.confirm')}
                                open={shouldOpenConfirmationDialog}
                                onConfirmDialogClose={handleDialogClose}
                                onYesClick={handleConfirmationResponse}
                                text={t('DeleteConfirm')}
                                Yes={t('Yes')}
                                No={t('No')}
                            />
                        )} */}
                    </div>
                    <div style={{ maxHeight: '400px' }}>
                        <MaterialReactTable
                            columns={columns}
                            data={data}
                            displayColumnDefOptions={{
                                'mrt-row-actions': {
                                    muiTableHeadCellProps: {
                                        align: 'center',
                                    },
                                    size: 120,
                                },
                            }}
                            enableEditing
                            enableColumnActions={false}
                            enableColumnFilters={false}
                            enableSorting={false}
                            enableTopToolbar={false}
                            muiTablePaginationProps={{
                                rowsPerPageOptions: [3, 5, 10, 20],
                                showFirstButton: false,
                                showLastButton: false,
                            }}
                            localization={{
                                actions: 'Hành động',
                            }}
                            muiTableBodyRowProps={{ hover: false }}
                            renderRowActions={({ row, table }) => (
                                <Box sx={{ display: 'flex', gap: '1rem' }}>
                                    <Tooltip arrow placement="right" title="Delete">
                                        <IconButton color="error" onClick={() => {}}>
                                            <Delete style={{ color: '#ff9e43' }} />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip arrow placement="left" title="Edit">
                                        <IconButton onClick={() => table.setEditingRow(row)}>
                                            <Edit style={{ color: '#7467ef' }} />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            )}
                            renderTopToolbarCustomActions={() => (
                                <Button color="secondary" onClick={() => {}} variant="contained">
                                    Create New Account
                                </Button>
                            )}
                            op
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Pending;
