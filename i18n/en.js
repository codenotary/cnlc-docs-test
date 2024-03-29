export default {
    sidebar: {
        dashboard: 'Home',
        ledgers: 'Ledgers',
        resources: 'Developer section',
        resourcesSubtitle: 'Plugins, SDKs',
        query: 'Query Ledger',
        auditReport: 'Audit report',
        settings: 'Manage',
        users: 'Users',
        alerts: 'Messages',
        help: 'Help'
    },
    navbar: {
        profile: 'Update profile',
        signout: 'Sign out',
        alerts: {
            showAll: 'Show all messages'
        }
    },
    ctas: {
        newLedger: {
            tooltip: 'Create a new ledger',
            button: 'Add ledger'
        }
    },
    cards: {
        getStarted: {
            title: 'Create your first ledger',
            description: 'Start by creating a new ledger. Ledgers are database applications for real world use cases.',
            button: 'Get started'
        },
        tamperingDetected: {
            positive: 'Tampering detected!',
            positiveDetails: 'The ledger auditor has detected tempering as of {date}',
            negative: 'No tampering detected',
            negativeDetails: 'The ledger auditor has not detected any tempering as of {date}'
        },
        systemsActive: 'All systems active',
        alertsDetected: 'No messages | One message | {count} messages',
        ledgersCount: 'No ledgers | One ledger | {count} ledgers',
        ledgerEntries: {
            tooltip: 'Number of entries',
            value: 'No entries | One entry | {count} entries',
            valueMany: '{count} entries'
        },
        ledgerNumberOfSources: {
            tooltip: 'Number of sources',
            value: 'No sources | One source | {count} sources'
        },
        ledgerSize: {
            tooltip: 'Total size',
            value: 'No data | {count}'
        },
        ledgerCreator: {
            tooltip: 'Created by',
            value: 'Created by {user}'
        },
        ledgerLastInsertion: {
            tooltip: 'Last insertion',
            value: 'Last insertion on',
            valueNoData: 'No data'
        },
        noApiKeys: {
            title: 'Create an API Key',
            description: 'Start by creating a new API Key. Connect your API Key to an application type, then set it up to create a data flow.',
            button: 'Get started'
        }
    },
    modals: {
        userRole: {
            title: 'Change user role for'
        },
        alertDetails: {
            title: 'Alert details'
        },
        userEmail: {
            title: 'Change email for',
            errorMessage: 'The chosen email is already in use.'
        },
        regeneratedPassword: {
            title: 'Regenerated password for'
        },
        readApiKey: {
            title: 'API Key'
        },
        readSignerHash: {
            title: 'Signer ID',
            input: {
                label: 'Signer ID'
            }
        }
    },
    charts: {
        diskSpaceLeft: {
            title: 'Disk usage'
        },
        writesOverTime: {
            title: 'Writes over time'
        }
    },
    ledgers: {
        title: 'Ledgers',
        singular: 'Ledger',
        createButton: 'Create a ledger',
        subnavbar: {
            dashboard: 'Dashboard',
            apiKeys: 'API Keys',
            queryLedger: 'Query Ledger',
            auditReport: 'Audit report',
            settings: 'Ledger Settings',
            export: 'Export'
        },
        searchInput: {
            placeholder: 'Search for a ledger'
        },
        table: {
            name: 'Name',
            created: 'Created at',
            creator: 'Created by',
            actions: 'Actions',
            status: 'Status',
            size: 'Size',
            entries: 'Entries',
            lastInsertion: 'Last insertion',
            actionsDropdown: {
                deleteLedger: 'Disable ledger',
                enableLedger: 'Enable ledger'
            }
        },
        exportsTable: {
            size: 'Size',
            compressedSize: 'Compressed Size',
            created: 'Created at',
            error: 'Details',
            file: 'File',
            status: 'Status',
            noExports: 'You haven\'t created any exports yet.',
            export: 'Export ledger',
            actions: 'Actions'
        },
        confirmDisableModal: {
            title: 'Are you sure you want to disable the {name} ledger?',
            text: 'By disabling the ledger, you are blocking any incoming data from being written.',
            textBold: 'Only the super-admin user "admin" can re-enable the ledger.',
            textProceed: 'To proceed, input the name of the ledger you want to disable below:',
            confirmText: 'Disable',
            cancelText: 'Cancel',
            confirmValidatorError: 'The ledger name does not match.'
        },
        confirmEnableModal: {
            title: 'Enable Ledgenr',
            text: 'Are you sure you want to enable this ledger?',
            confirmText: 'Enable',
            cancelText: 'Cancel'
        }
    },
    ledger: {
        settings: {
            title: 'Ledger Settings',
            form: {
                nameInput: {
                    label: 'Ledger name',
                    placeholder: 'Enter a ledger name'
                },
                submit: 'Update ledger'
            },
            updatedToast: 'Ledger settings saved successfully!'
        },
        query: {
            title: 'Query Ledger'
        },
        export: {
            title: 'Export'
        }
    },
    dashboard: {
        title: 'Home'
    },
    ledgerCreateWizard: {
        createLedger: {
            title: 'Define Ledger',
            description: 'Ledgers provide you with the workflow setup you need for immudb to work with your data.',
            nameInput: {
                label: 'Ledger name',
                placeholder: 'Enter a ledger name'
            },
            labelsTitle: 'Data Labelling',
            labelsDescription: 'You can label the data stream using custom labels',
            labelInput: {
                placeholder: 'Enter something like \'my-awesome-label\''
            },
            nextButton: 'Next step'
        },
        apiKey: {
            title: 'Define API Key',
            description: 'You will use the API Key to connect to ledger {name}.',
            downloadButton: 'Download API Key',
            prevButton: 'Previous step',
            nextButton: 'Next step',
            nameInput: {
                label: 'API Key name',
                placeholder: 'Enter a API Key name'
            },
            postgres: {
                label: 'I want to use this API Key with postgres.'
            }
        },
        done: {
            title: 'Summary',
            pageTitle: 'You\'re ready to go!',
            description: 'Your Ledger and API Key have been created successfully.',
            ledgerName: 'Ledger',
            apiKeyName: 'Key name',
            nextButton: 'Go to ledger',
            connectButton: 'Connect your applications'
        }
    },
    apiKeyCreateWizard: {
        setupApiKey: {
            title: 'Define API Key',
            description: 'You will use the API Key to connect to ledger {name}.',
            nextButton: 'Create API Key',
            nameInput: {
                label: 'API Key name',
                placeholder: 'Enter a API Key name'
            },
            postgres: {
                label: 'I want to use this API Key with postgres.'
            }
        },
        created: {
            title: 'Summary',
            pageTitle: 'Your API Key is ready!',
            description: 'Use this API Key to connect your application. The API Secret cannot be retrieved in the future. Store it in a secure location.',
            downloadButton: 'Download API Key',
            nextButton: 'Done'
        }
    },
    apiKeys: {
        title: 'API Keys',
        singular: 'API Key',
        createButton: 'Create API Key',
        confirmDeleteModal: {
            title: 'Delete API Key',
            text: 'Are you sure you want to delete this API Key?',
            usageText: 'This API Key has last been used on {lastUsed}.',
            confirmText: 'Delete',
            cancelText: 'Cancel'
        },
        secretInfo: 'The API Secret cannot be retrieved in the future. Store it in a secure location.',
        table: {
            name: 'Name',
            plugin: 'Plugin',
            lastUsed: 'Last used',
            actions: 'Actions',
            status: 'Status',
            signer: 'Signer',
            actionsDropdown: {
                deleteApiKey: 'Delete API Key',
                readApiKey: 'Retrieve API Key',
                readSignerHash: 'Show Signer ID'
            },
            pluginType: {
                vcn: 'CI/CD',
                postgres: 'postgreSQL',
                other: 'SDK'
            }
        }
    },
    users: {
        title: 'Users',
        createButton: 'Create user',
        searchInput: {
            placeholder: 'Search for an user'
        },
        table: {
            username: 'Username',
            name: 'Name',
            type: 'Type',
            email: 'Email',
            created: 'Created at',
            actions: 'Actions',
            actionsDropdown: {
                changeRole: 'Change role',
                changeEmail: 'Change email',
                regeneratePassword: 'Regenerate password',
                deleteUser: 'Delete user'
            }
        },
        create: {
            title: 'New user',
            createdToast: 'User has been successfully created!'
        },
        delete: {
            deletedToast: 'User has been successfully deleted!'
        },
        confirmDeleteModal: {
            title: 'Delete user',
            text: 'Are you sure you want to delete user {user}?',
            confirmText: 'Delete',
            cancelText: 'Cancel'
        },
        regeneratePasswordModal: {
            title: 'Regenerate user password',
            text: 'Are you sure you want to regenerate the password for {user}?',
            confirmText: 'Regenerate Password',
            cancelText: 'Cancel'
        }
    },
    profile: {
        title: 'Update profile',
        password: {
            title: 'Update your password',
            button: 'Update password',
            error: 'The current password you have entered is incorrect.',
            currentPasswordInput: {
                label: 'Current password',
                placeholder: 'Enter your current password'
            },
            newPasswordInput: {
                label: 'New password',
                placeholder: 'Enter your new password'
            },
            newPasswordConfirmationInput: {
                label: 'Confirm new password',
                placeholder: 'Repeat your new password'
            },
            successMessage: 'Password has been changed successfully! Please logout.'
        },
        email: {
            title: 'Update your email address',
            input: {
                label: 'Email',
                placeholder: 'Enter a new email address'
            },
            button: 'Update email',
            successMessage: 'Email has been changed successfully! Please logout.',
            errorMessage: 'This email address is already in use.',
            sameEmailErrorMessage: 'Please enter a different email address.'
        },
        preferences: {
            title: 'Update your preferences',
            button: 'Update preferences',
            timezone: {
                label: 'Timezone',
                placeholder: 'Select your timezone',
                values: {
                    local: 'Browser',
                    UTC: 'UTC'
                },
                successMessage: 'Timezone preference updated successfully!'
            }
        }
    },
    settings: {
        title: 'Manage',
        notifications: {
            title: 'Email notifications',
            recipients: {
                title: 'Notification recipients',
                inputPlaceholder: 'Enter email address',
                addButton: 'Add recipient',
                emailExistsError: 'This email address already exists.',
                confirmDeleteModal: {
                    title: 'Delete notification email',
                    text: 'Are you sure you want to remove {email} from the notification recipients list?',
                    confirmText: 'Delete',
                    cancelText: 'Cancel'
                }
            },
            smtp: {
                title: 'SMTP settings',
                address: {
                    label: 'SMTP host'
                },
                port: {
                    label: 'SMTP port'
                },
                tls: {
                    label: 'SSL'
                },
                email: {
                    label: 'Email'
                },
                username: {
                    label: 'Username'
                },
                password: {
                    label: 'Password'
                },
                status: {
                    label: 'Status',
                    positive: 'Configured',
                    negative: 'Not configured'
                },
                saveButton: 'Save settings',
                savedToast: 'SMTP settings saved succesfully!'
            },
            test: {
                title: 'Test configuration',
                labelAllRecipients: 'Test target',
                radioAllRecipients: 'All recipients',
                radioTestEmailAddress: 'Test email address',
                testEmailAddressPlacholeder: 'Test email address',
                button: 'Send test notification'
            }
        },
        logging: {
            title: 'Logging',
            description: 'Remote host to which syslog messages are forwarded and port on which the remote host receives syslog messages',
            inputPlaceholder: 'protocol://Syslog-Target:Port, i.e. tcp://syslogserver:1514',
            saveButton: 'Save changes',
            savedToast: 'Logging settings saved successfully',
            invalidFormat: 'The connection string format needs to be protocol://sysloghost:syslogport'
        },
        license: {
            title: 'License',
            description: 'For additional information on Codenotary Cloud® licensing and plans, go here.',
            inputPlaceholder: 'Paste license key here or select a license file below',
            selectPlaceholder: 'Select license file',
            addButton: 'Update license',
            savedToast: 'License saved successfully',
            licenseCardTitle: 'License',
            companyName: 'Company name',
            contactName: 'Contact name',
            contactEmail: 'Contact email',
            expiration: 'Expiration date',
            plan: 'Plan',
            expired: 'Expired',
            future: 'Starting soon',
            active: 'Active'
        },
        backup: {
            title: 'Backup',
            manage: {
                title: 'Manage scheduled backup',
                text: 'Specify a backup schedule for the appliance',
                button: 'Manage scheduled backup',
                cronExpression: 'Cron expression',
                backupCreated: 'Backup created',
                backupUpdated: 'Backup updated',
                destinationUrl: 'Destination url',
                modal: {
                    title: 'Manage scheduled backup',
                    text: 'Schedule a backup every:',
                    minValue: 'Scheduling time should be at least {minValue} {minUnit}.',
                    textProceed: 'To proceed, re-insert your password',
                    placeholder: 'Admin password',
                    confirmText: 'Apply backup policy',
                    cancelText: 'Cancel',
                    warning: {
                        text: 'This will reboot the Codenotary Cloud® appliance on the scheduled date!',
                        textBold: 'Only the super-admin user "admin" can re-enable the ledger.'
                    }
                },
                success: 'Backup scheduling policy have been update succesfully!'
            },
            remove: {
                title: 'Remove scheduled backup',
                text: 'Remove all scheduled backups for the appliance',
                button: 'Remove scheduled backup',
                modal: {
                    title: 'Remove scheduled backup',
                    textProceed: 'To proceed, re-insert your password',
                    placeholder: 'Admin password',
                    confirmText: 'Remove backup policy',
                    cancelText: 'Cancel'
                },
                success: 'Backup scheduling policy have been update succesfully!'
            },
            create: {
                title: 'Create an on-demand backup',
                text: 'Backup the appliance immediatly',
                button: 'Create an on-demand backup',
                name: 'Codenotary Cloud®',
                version: 'Version: {version}',
                patch: 'Patch: {patch}',
                modal: {
                    title: 'Create an on-demand backup',
                    textProceed: 'To proceed, re-insert your password',
                    placeholder: 'Admin password',
                    confirmText: 'Create',
                    cancelText: 'Cancel',
                    warning: {
                        text: 'This will immediatly reboot the Codenotary Cloud® appliance!',
                        textBold: 'Only the super-admin user "admin" can re-enable the ledger.'
                    }
                },
                success: 'An on-demand backup has been created succesfully!'
            },
            patching: 'The following operations are currently disabled as an appliance patch is beeing applied.'
        },
        maintenance: {
            title: 'Maintenance',
            currentMaintenanceMode: 'Current maintenance status mode: {status}',
            rebootAppliance: {
                title: 'Reboot appliance',
                button: 'Reboot appliance',
                modal: {
                    title: 'Reboot appliance',
                    textProceed: 'To proceed, re-insert your password',
                    placeholder: 'Admin password',
                    confirmText: 'Apply',
                    cancelText: 'Cancel',
                    warning: {
                        text: 'This will reboot Codenotary Cloud® appliance!',
                        textBold: 'Only the super-admin user "admin" can re-enable the ledger.'
                    }
                }
            },
            turnOnMaintenanceMode: {
                title: 'Turn ON maintenance mode',
                button: 'Turn ON maintenance mode',
                modal: {
                    title: 'Toggle ON Maintenance Mode',
                    textProceed: 'To proceed, re-insert your password',
                    placeholder: 'Admin password',
                    confirmText: 'Apply',
                    cancelText: 'Cancel',
                    warning: {
                        text: 'Maintenance mode will block any incoming connection!',
                        textBold: 'Only the super-admin user "admin" can re-enable the ledger.'
                    }
                }
            },
            turnOffMaintenanceMode: {
                title: 'Current maintenance status mode: {status}',
                button: 'Turn OFF maintenance mode',
                modal: {
                    title: 'Toggle OFF Maintenance Mode',
                    textProceed: 'To proceed, re-insert your password',
                    placeholder: 'Admin password',
                    confirmText: 'Apply',
                    cancelText: 'Cancel',
                    warning: {
                        text: 'Any incoming connection will be restored',
                        textBold: 'Only the super-admin user "admin" can re-enable the ledger.'
                    }
                }
            },
            success: {
                rebootAppliance: 'The appliance has been rebooted succesfully!',
                toggelMaintenanceMode: 'The maintenance mode has been updated succesfully!'
            },
            banner: {
                title: 'MAINTENANCE MODE: ON'
            },
            patching: 'The following operations are currently disabled as an appliance patch is beeing applied.'
        },
        appliance: {
            title: 'Appliance information',
            description: 'Codenotary Cloud®',
            containerName: 'Container name',
            version: 'Version',
            buildTime: 'Build time',
            components: {
                title: 'Components',
                backend: 'CNLC Backend',
                frontend: 'CNLC Frontend',
                immudb: 'immudb',
                postgres: 'PostgreSQL',
                monitor: 'Monitor',
                watchdog: 'Watchdog',
                operation: 'Operation',
                auditor: 'Auditor',
                traefik: 'Traefik',
                resources: 'Resources',
                monitorServices: 'Monitor services',
                logger: 'Logger'
            }
        },
        patching: {
            title: 'Patching',
            label: 'Patch file',
            placeholder: 'Patch file',
            hint: 'Last patch applied at: {date}',
            lastAppliedPatch: 'Last patch applied at:',
            upload: {
                title: 'Upload patch',
                secondaryTitle: 'Uploading patch',
                button: 'Start patch upload',
                success: 'Patch uploaded succesfully!',
                progress: 'Loading {percentage}%',
                progressFallback: 'Loading...',
                required: 'Patch file must a valid .zip, .rar or .tar.gz.',
                uploadingFile: 'Uploading file: {filename}.',
                uploadedFile: 'Uploaded file: {filename}.',
                error: {
                    extension: 'Patch had the wrong file type, must be a .zip, .rar or .tar.gz',
                    size: 'Patch exceded maximum size',
                    timeout: 'Patch loading operation timeout',
                    abort: 'Patch upload aborted',
                    network: 'Network error during patch upload',
                    server: 'Server error during patch upload',
                    denied: 'Patch upload denied'
                }
            },
            stop: {
                button: 'Stop patch upload'
            },
            apply: {
                title: 'Apply patch',
                button: 'Start patch apply',
                applyFile: 'File ready: {filename}.',
                modal: {
                    title: 'Apply patch',
                    textProceed: 'To proceed, re-insert your password',
                    placeholder: 'Admin password',
                    confirmText: 'Apply patch',
                    cancelText: 'Cancel',
                    warning: {
                        text: 'This will restart Codenotary Cloud®\'s services after completion!'
                    }
                },
                error: {
                    failed: 'Patch apply failed'
                },
                started: 'Patch apply started',
                success: 'Patch applied succesfully!'
            },
            applying: {
                title: 'Applying patch',
                applyingFile: 'Applying file: {filename}.',
                modal: {
                    title: 'Apply patch',
                    textProceed: 'To proceed, re-insert your password',
                    placeholder: 'Admin password',
                    confirmText: 'Apply patch',
                    cancelText: 'Cancel',
                    warning: {
                        text: 'This will restart Codenotary Cloud®\'s services after completion!'
                    }
                },
                warning: {
                    background: 'Patch apply will continue in background',
                    doNotRestart: 'To avoid leaving the application in an inconsistent state it is advisable not to reload the page and not to restart the application manually (eg: backup, maintance mode, etc).'
                },
                error: {
                    failed: 'Patch apply failed',
                    abort: 'Patch apply aborted'
                },
                started: 'Patch apply started',
                success: 'Patch applied successfully!'
            },
            applied: {
                title: 'Patch applied successfully!',
                refresh: 'Refresh the page if you want to upload a new patch.'
            },
            logs: {
                title: 'Logs',
                titleLatest: 'Latest patch apply logs',
                func: 'Function',
                caller: 'Caller',
                level: 'Level',
                message: 'Msg'
            },
            rollback: {
                title: 'Rollback',
                button: 'Rollback last patch',
                modal: {
                    title: 'Rollback last patch',
                    textProceed: 'To proceed, re-insert your password',
                    placeholder: 'Admin password',
                    confirmText: 'Rollback last patch',
                    cancelText: 'Cancel',
                    warning: {
                        text: 'This will reboot the Codenotary Cloud® appliance!',
                        textBold: 'Only the super-admin user "admin" can re-enable the ledger.'
                    }
                },
                success: 'Patch rolled back succesfully!'
            },
            restarting: {
                title: 'Codenotary Cloud® is currently restarting following a patch apply.',
                text: 'You\'ll be redirected to the \'sign in\' page automatically and this pop-up will be dismissed soon afterward.',
                warning: 'Manually refreshing the page now could result in a 404 or 504 error page.'
            }
        },
        subnavbar: {
            notifications: 'Email notifications',
            logging: 'Logging',
            license: 'License',
            backup: 'Backup',
            maintenance: 'Maintenance',
            appliance: 'Appliance information',
            patching: 'Patching'
        }
    },
    queryLedgers: {
        title: 'Query Ledger',
        table: {
            actions: 'Actions',
            key: 'Key',
            database: 'Database',
            schema: 'Schema',
            table: 'Table',
            sequence: 'Primary key',
            value: 'Value',
            size: 'Size',
            kind: 'Kind',
            contentType: 'Content Type',
            notarizationDate: 'Notarization date',
            insertionDate: 'Insertion date',
            tamperedUpdateDate: 'Tampered status since',
            tamperedDate: 'Tampered date',
            assetHash: 'Asset hash',
            signerId: 'Signer ID',
            assetName: 'Asset name',
            trustLevel: 'Trust level',
            tamperedStatus: 'Tampered status',
            tampered: 'Tampered',
            notTampered: 'Not tampered',
            actionsDropdown: {}
        },
        recentQueriesTable: {
            ledger: 'Ledger',
            apiKey: 'API Key',
            start: 'Start date',
            end: 'End date',
            query: 'Query',
            actions: 'Actions',
            apply: 'Apply'
        },
        apiKeySearch: {
            type: 'This API Key is of type {type}'
        },
        noData: 'No data matches your query',
        execution: 'Query executed in {time}.',
        noPrefixSpecified: 'No key prefix has been specified. Displaying first {n} records.'
    },
    signin: {
        title: 'Welcome back!',
        subtitle: 'Sign in to your account',
        form: {
            username: {
                label: 'Username',
                placeholder: 'Enter your username'
            },
            password: {
                label: 'Password',
                placeholder: 'Enter your password'
            },
            submit: 'Sign In'
        },
        errorMessage: 'Incorrect username or password',
        termsPreamble: 'By signing in you agree to our',
        terms: 'Terms and Conditions'
    },
    applianceUnderMaintenance: {
        title: 'The site is currently in maintenance mode.',
        button: 'Turn OFF maintenance mode',
        modal: {
            title: 'Toggle OFF Maintenance Mode',
            textProceed: 'To proceed, re-insert your password',
            placeholder: 'Admin password',
            confirmText: 'Apply',
            cancelText: 'Cancel',
            warning: {
                text: 'Any incoming connection will be restored'
            }
        },
        success: 'The maintenance mode has been turned OFF succesfully!'
    },
    resources: {
        checkLatestVersion: 'Check latest version',
        downloadLatestVersion: 'Download latest version',
        currentVersion: 'Current version: {plugin} {version}',
        upToDate: 'Up to date',
        copyDownloadLink: 'Copy download link',
        foundNewVersion: 'Found a new version',
        sdks: {
            download: 'Download SDK'
        },
        plugins: {
            download: 'Download Plugin'
        }
    },
    alerts: {
        title: 'Messages',
        active: {
            title: 'Active messages'
        },
        acknowledged: {
            title: 'Acknowledged messages'
        },
        info: {
            automaticAcknowledge: 'If the situation that caused the alert it\'s resolved, then a message is automatically acknowledged and available under the \'acknowledged messages\' tab.'
        },
        types: {
            tamper: 'Tampering',
            license: 'License',
            cpu: 'CPU',
            memory: 'Memory',
            disk: 'Disk',
            container: 'System',
            grpc: 'Application'
        },
        messages: {
            tamper: 'Tampering alert on ledger {ledger} from API Key {apiKey}!',
            license: 'Your license has expired!',
            cpu: 'High CPU usage!',
            memory: 'High Memory usage!',
            disk: 'Your Disk is almost full!',
            container: 'Container alert!',
            grpc: 'gRPC alert!'
        },
        table: {
            severity: 'Severity',
            resourceName: 'Resource name',
            type: 'Type',
            apiKey: 'API Key',
            ledger: 'Ledger',
            created: 'Date',
            message: 'Message',
            action: 'Action',
            acknowledge: 'Acknowledge'
        },
        noData: 'No new messages'
    },
    auditReport: {
        title: 'Audit report',
        dateFrom: 'Select report start date',
        dateTo: 'Select report end date',
        timerange: {
            from: 'From last',
            to: 'to',
            toLimit: 'last {value} {unit} ago',
            info: 'Ledger data sampling is performed each hour at minute :00. Each sample is available {value} {unit} after processing.'
        },
        generateButton: 'Generate report',
        table: {
            startDate: 'Audit start date',
            endDate: 'Audit end date',
            created: 'Created at',
            status: 'Status'
        },
        status: {
            IN_PROGRESS: 'Generating..',
            FAILED: 'Failed'
        }
    },
    help: {
        title: 'Help'
    },
    confirm: 'Confirm',
    cancel: 'Cancel',
    submit: 'Submit',
    resourceName: 'Resource name',
    query: 'Query',
    history: 'History',
    recentQueries: 'Recent queries',
    download: 'Download',
    type: 'Type',
    date: 'Date',
    log: 'Log',
    key: 'Key',
    value: 'Value',
    secret: 'Secret',
    enabled: 'Enabled',
    disabled: 'Disabled',
    disabledOn: 'Disabled on {date}',
    done: 'Done',
    password: 'Password',
    message: 'Message',
    close: 'Close',
    filter: 'Filter',
    filtering: 'Filtering...',
    roles: {
        superadmin: 'Administrator',
        admin: 'Ledger Administrator',
        auditor: 'Auditor'
    },
    copiedToClipboard: 'Copied to clipboard!',
    somethingWentWrong: 'Oops! Something went wrong.',
    errors: {
        duplicateName: 'The chosen name already exists.',
        duplicateLedgerName: 'A Ledger with the same name already exists, please enter a different name.',
        duplicateApiKeyName: 'An API Key with the same name already exists, please enter a different name.',
        duplicateUserUsername: 'A user with the same username already exists, please enter a different username.',
        duplicateUserEmail: 'A user with the same email already exists, please enter a different email.',
        duplicateUser: 'A user with the same username or email already exists, please enter a different value.'
    },
    validation: {
        ledgerName: 'Ledger name should not contain any spaces, only alphanumeric characters, dashes (-) and underscores (_).',
        apiKeyName: 'API Key name should not contain any spaces, only alphanumeric characters, dashes (-) and underscores (_).',
        labelName: 'Labels should not contain any spaces, only alphanumeric characters, dashes (-) and underscores (_).',
        labelNameDuplicate: 'This label already exists.',
        labelNameMinLength: 'Please enter at least 3 characters.'
    },
    trustLevels: {
        0: 'Trusted',
        1: 'Untrusted',
        2: 'Unknown',
        3: 'Unsupported'
    },
    inputs: {
        file: {
            selected: 'Selected file:',
            select: 'Select file'
        }
    },
    timerange: {
        label: 'Timerange',
        from: 'From',
        to: 'To',
        last: 'Last',
        start: {
            label: 'Start date',
            error: 'Start date is invalid'
        },
        end: {
            label: 'End date',
            error: 'End date is invalid',
            beforeStartError: 'End date must be after start date'
        },
        absolute: {
            from: 'From',
            to: 'to',
            defaultFrom: 'Insert from',
            tamperedFrom: 'Checked for tamper from'
        },
        relative: {
            last: 'Last',
            defaultFrom: 'Insert in the last',
            tamperedFrom: 'Checked for tamper in the last'
        },
        target: {
            label: 'Target by',
            default: 'insertion date',
            tamperCheck: 'tamper check date'
        }
    },
    dateFrom: 'Select start date',
    dateTo: 'Select end date',
    timeAgo: '{time} ago',
    savedQueries: 'Saved queries',
    saveQuery: 'Save Query',
    warnings: {
        adminDefaultPassword1: 'For security reasons, please ',
        adminDefaultPassword2: 'change the default admin password'
    }
};
