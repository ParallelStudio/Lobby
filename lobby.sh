#!/bin/bash
#
# pd startup script for the lobby project
#

PD=`which pd`
if [ "" == "${PD}" ] ; then
	echo Cannot find pd in the path.
	exit 1
fi

MYDIR=`dirname $0`
ABS=${MYDIR}/pd/abs
SOUNDS=${MYDIR}/sounds

# TODO: Customize the commandline here
${PD} -path ${ABS} \
	-path ${SOUNDS} \
	-send "pd dsp 1"
