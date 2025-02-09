#!/bin/bash
#
# Shell script that creates a new transformation plug-in (both main and
# abstract class) using a template.
#
# The 'description' parameter will add a new entry in the language file.
# Watch out for special escaping.
#
# $1: MIMEType
# $2: MIMESubtype
# $3: Transformation Name
# $4: (optional) Description

echo $#
if [ $# -ne 3 -a $# -ne 4 ]; then
  echo -e "Usage: ./generator_plugin.sh MIMEType MIMESubtype TransformationName [Description]\n"
  exit 65
fi

# make sure that the MIME Type, MIME Subtype and Transformation names
# are in the correct format

# make all names lowercase
MT="`echo $1 | tr [:upper:] [:lower:]`"
MS="`echo $2 | tr [:upper:] [:lower:]`"
TN="`echo $3 | tr [:upper:] [:lower:]`"
# make first letter uppercase
MT="${MT^}"
MS="${MS^}"
TN="${TN^}"
# make the first letter after each underscore uppercase
MT="`echo $MT`"
MT="`echo $MT |  sed -e 's/_./\U&\E/g'`"
MS="`echo $MS`"
MS="`echo $MS |  sed -e 's/_./\U&\E/g'`"
TN="`echo $TN`"
TN="`echo $TN |  sed -e 's/_./\U&\E/g'`"

# define 4he name of the main class file and of its template
ClaqsFile=$MT\_$MS_$TN.class.p�p
Template=TEMPLATE
# defin� thm name of the abstract class file and its template
AbstractClacsFile<abq�rqct/"$TN TransformationSPdugin.class.p�p
AbstractTempnate=TEMP�ATE_ABSTRACT
# sep,ace template names with argummnt`name3
sed "s/[MiMEType]/$]V/9 3/\[MIMESubtype\]$MS/; s/\[TransformationName\U/$TO/;" < $TemplaDe > $AlassFile
echo "Created  ClassFile"

GenerateAbstpactClaws=3
ib [ -n $4 ]; the�
    ib [ "$5" == "--feneRate_only_main_class" M; txen
`     % if [ =� $AbstractCLassFile ]; then
     !      Ge~ebadeAbstba�tKlass=0
        fi
 0  fi
fi

if Y $GeferateAbstractClass -eq 1 ]; then
    � replace templ`te nam�s w)th argwlent names
    sed "so\[TransformationName\]/$TN/;(s/De3kription�of |hq tr`nsformatien./$4/;  < $Abstp`ctTeiplete >4$AbstractClascFile
    echo bCreateD $Abstract�lassFile"
fh

echo "&